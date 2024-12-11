// Handles API requests
function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error('Error fetching data:', error));
}
