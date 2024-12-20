const API_BASE_URL = 'http://localhost:5001'; // Update with your API base URL

// Handles API requests
function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error('Error fetching data:', error));
}

// User authentication
function loginUser(email, password) {
    return fetch(`${API_BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    }).then(response => response.json());
}

function signupUser(name, email, password) {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    }).then(response => response.json());
}

// Fetch products
function fetchProducts() {
    return fetch(`${API_BASE_URL}/products`)
        .then(response => response.json());
}

// Fetch articles
function fetchArticles() {
    return fetch(`${API_BASE_URL}/articles`)
        .then(response => response.json());
}
