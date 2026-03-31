// Audience toggle — sets data-mode on <body> immediately to prevent flash
(function () {
	var saved = localStorage.getItem('audience') || 'academic';
	document.documentElement.setAttribute('data-mode', saved);
	document.addEventListener('DOMContentLoaded', function () {
		document.body.setAttribute('data-mode', saved);
		var btn = document.getElementById('audience-toggle');
		if (!btn) return;
		btn.textContent = saved === 'academic' ? 'Switch to: General' : 'Switch to: Academic';
		btn.addEventListener('click', function () {
			var current = document.body.getAttribute('data-mode');
			var next = current === 'academic' ? 'general' : 'academic';
			document.body.setAttribute('data-mode', next);
			localStorage.setItem('audience', next);
			this.textContent = next === 'academic' ? 'Switch to: General' : 'Switch to: Academic';
		});
	});
}());
