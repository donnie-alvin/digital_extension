const express = require('express');
const router = express.Router();
const db = require('../utils/db'); // Database connection
const { validateProduct, handleValidationErrors } = require('../utils/validation');

// GET /api/products - Fetch all products
router.get('/', (req, res) => {
  const query = 'SELECT * FROM products';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// POST /api/products - Add a new product
router.post('/', validateProduct, handleValidationErrors, (req, res) => {
  const { name, description, price } = req.body;
  const query = 'INSERT INTO products (name, description, price) VALUES (?, ?, ?)';
  db.query(query, [name, description, price], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Product added successfully!', productId: results.insertId });
  });
});

// GET /api/products/:id - Fetch product by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM products WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(results[0]);
  });
});

// PUT /api/products/:id - Update product details by ID
router.put('/:id', validateProduct, handleValidationErrors, (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;
  const query = 'UPDATE products SET name = ?, description = ?, price = ? WHERE id = ?';
  db.query(query, [name, description, price, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product updated successfully!' });
  });
});

// DELETE /api/products/:id - Delete product by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM products WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully!' });
  });
});

module.exports = router;
