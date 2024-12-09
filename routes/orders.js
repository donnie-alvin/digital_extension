const express = require('express');
const router = express.Router();
const db = require('../utils/db'); // Database connection

// POST /orders - Add a new order
router.post('/', (req, res) => {
  const { user_id, product_id, quantity, total_price } = req.body;
  const query = 'INSERT INTO orders (user_id, product_id, quantity, total_price) VALUES (?, ?, ?, ?)';
  db.query(query, [user_id, product_id, quantity, total_price], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Order added successfully', id: results.insertId });
  });
});

// GET /orders - Get all orders
router.get('/', (req, res) => {
  const query = 'SELECT * FROM orders';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// GET /orders/:id - Get an order by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM orders WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(results[0]);
  });
});

// PUT /orders/:id - Update an order by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { user_id, product_id, quantity, total_price } = req.body;
  const query = 'UPDATE orders SET user_id = ?, product_id = ?, quantity = ?, total_price = ? WHERE id = ?';
  db.query(query, [user_id, product_id, quantity, total_price, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ message: 'Order updated successfully' });
  });
});

// DELETE /orders/:id - Delete an order by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM orders WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ message: 'Order deleted successfully' });
  });
});

module.exports = router;
