const express = require('express');
const router = express.Router();
const db = require('../utils/db'); // Database connection

// POST /farmers - Add a new farmer
router.post('/', (req, res) => {
  const { name, address, contact } = req.body;
  const query = 'INSERT INTO farmers (name, address, contact) VALUES (?, ?, ?)';
  db.query(query, [name, address, contact], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Farmer added successfully', id: results.insertId });
  });
});

// GET /farmers - Get all farmers
router.get('/', (req, res) => {
  const query = 'SELECT * FROM farmers';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// GET /farmers/:id - Get a farmer by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM farmers WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Farmer not found' });
    }
    res.json(results[0]);
  });
});

// PUT /farmers/:id - Update a farmer by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, address, contact } = req.body;
  const query = 'UPDATE farmers SET name = ?, address = ?, contact = ? WHERE id = ?';
  db.query(query, [name, address, contact, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Farmer not found' });
    }
    res.json({ message: 'Farmer updated successfully' });
  });
});

// DELETE /farmers/:id - Delete a farmer by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM farmers WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Farmer not found' });
    }
    res.json({ message: 'Farmer deleted successfully' });
  });
});

module.exports = router;
