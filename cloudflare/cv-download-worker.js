// Reference copy of the `cv-download` Worker (Cloudflare dashboard → Workers & Pages → cv-download).
// The live code is whatever was last deployed in the dashboard — paste changes back here so the two stay in step.
//
// Worker settings → Variables and Secrets:
//   TURNSTILE_SECRET  secret  Turnstile secret key
//   GITHUB_TOKEN      secret  fine-grained token: tjw-benth/cv-private only, Contents read-only
// Worker settings → Bindings:
//   CV_DOWNLOADS      KV      optional emails, keyed `ISO timestamp::email`

// The CV lives in a private repo rather than on GitHub Pages, so this Worker (after a passed
// Turnstile check) is the only way to fetch it. Updating the CV = replacing the file in that repo.
const CV_SOURCE = 'https://api.github.com/repos/tjw-benth/cv-private/contents/williams_CV.pdf';

export default {
  async fetch(request, env) {
    const cors = {
      'Access-Control-Allow-Origin': 'https://tjw-benth.github.io',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    const fail = (error, status) => new Response(JSON.stringify({ success: false, error }), {
      status, headers: { ...cors, 'Content-Type': 'application/json' },
    });

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: cors });
    }
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: cors });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return fail('Bad request', 400);
    }

    const { email, token } = body;

    // Verify Turnstile token server-side
    const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: env.TURNSTILE_SECRET,
        response: token,
        remoteip: request.headers.get('CF-Connecting-IP'),
      }),
    });
    const result = await verify.json();

    // the site reads a 400 as "verification failed" and anything else as "something went wrong"
    if (!result.success) {
      return fail('Verification failed', 400);
    }

    const cv = await fetch(CV_SOURCE, {
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.raw+json',
        'User-Agent': 'cv-download-worker', // GitHub's API rejects requests without one
      },
    });
    if (!cv.ok) {
      // 401 here almost always means GITHUB_TOKEN has expired — check the Worker's logs
      console.log('CV fetch from GitHub failed:', cv.status);
      return fail('CV unavailable', 502);
    }

    // Store optional email in KV with timestamp + country only (no IP stored).
    // Stored only once the CV is in hand, so each row is a real download. 254 = longest valid address,
    // which also keeps the key under KV's 512-byte limit.
    if (typeof email === 'string' && email.includes('@') && email.length <= 254 && env.CV_DOWNLOADS) {
      const ts = new Date().toISOString();
      await env.CV_DOWNLOADS.put(`${ts}::${email}`, JSON.stringify({
        email,
        timestamp: ts,
        country: request.headers.get('CF-IPCountry') || 'unknown',
      }));
    }

    return new Response(cv.body, {
      headers: {
        ...cors,
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Williams_CV.pdf"',
        'Cache-Control': 'no-store',
      },
    });
  },
};
