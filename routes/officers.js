const express = require('express');
const router = express.Router();
const db = require('../utils/db'); // Database connection
const { validateOfficer, handleValidationErrors } = require('../utils/validation');

// GET /api/officers - Fetch all officers
router.get('/', (req, res) => {
  const query = 'SELECT * FROM officers';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// POST /api/officers - Add an officer
router.post('/', validateOfficer, handleValidationErrors, (req, res) => {
  const { name, email, phone } = req.body;
  const query = 'INSERT INTO officers (name, email, phone) VALUES (?, ?, ?)';
  db.query(query, [name, email, phone], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Officer added successfully!', officerId: results.insertId });
  });
});

// GET /api/officers/:id - Fetch officer by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM officers WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Officer not found' });
    }
    res.json(results[0]);
  });
});

// PUT /api/officers/:id - Update officer details by ID
router.put('/:id', validateOfficer, handleValidationErrors, (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  const query = 'UPDATE officers SET name = ?, email = ?, phone = ? WHERE id = ?';
  db.query(query, [name, email, phone, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Officer not found' });
    }
    res.json({ message: 'Officer updated successfully!' });
  });
});

// DELETE /api/officers/:id - Delete officer by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM officers WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Officer not found' });
    }
    res.json({ message: 'Officer deleted successfully!' });
  });
});

module.exports = router;
