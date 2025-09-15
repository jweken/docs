    // Load an external HTML file and insert its content into an element with id "container"
// Example usage:
// loadExternalHTML('external.html', 'container');

function loadExternalHTML(url, containerId) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading external HTML:', error);
        });
}

