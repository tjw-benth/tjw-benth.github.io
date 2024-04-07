// fetchprojects.js

// Fetch the projects.html content
fetch('projects.html')
    .then(response => response.text())
    .then(html => {
        // Create a temporary element to parse the HTML content
        const tempElement = document.createElement('div');
        tempElement.innerHTML = html;

        // Get all articles within the .features section from projects.html
        const articles = tempElement.querySelectorAll('.features article');

        // Shuffle the articles array randomly
        const shuffledArticles = Array.from(articles).sort(() => Math.random() - 0.5);

        // Select a random subset of 4 articles
        const selectedArticles = shuffledArticles.slice(0, 4);

        // Create a .features section
        const featuresSection = document.createElement('section');
        featuresSection.classList.add('features');

        // Append each selected article to the .features section
        selectedArticles.forEach(article => {
            featuresSection.appendChild(article.cloneNode(true));
        });

        // Append the .features section to index.html
        const featuredProjectsContainer = document.getElementById('featured-projects');
        featuredProjectsContainer.appendChild(featuresSection);
    })
    .catch(error => console.error('Error fetching projects.html:', error));
