// Fetch and display products
document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});

function fetchProducts() {
    fetch('http://localhost:5001/products')
        .then(response => response.json())
        .then(data => {
            const productsList = document.getElementById('products-list');
            productsList.innerHTML = ''; // Clear existing content
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                `;
                productsList.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
}
