const express = require('express');
const router = express.Router();
const db = require('../utils/db'); // Database connection

// POST /products - Add a new product
router.post('/', (req, res) => {
  const { name, description, price, stock } = req.body;
  const query = 'INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)';
  db.query(query, [name, description, price, stock], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Product added successfully', id: results.insertId });
  });
});

// GET /products - Get all products
router.get('/', (req, res) => {
  const query = 'SELECT * FROM products';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// GET /products/:id - Get a product by ID
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

// PUT /products/:id - Update a product by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock } = req.body;
  const query = 'UPDATE products SET name = ?, description = ?, price = ?, stock = ? WHERE id = ?';
  db.query(query, [name, description, price, stock, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product updated successfully' });
  });
});

// DELETE /products/:id - Delete a product by ID
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
    res.json({ message: 'Product deleted successfully' });
  });
});

module.exports = router;
