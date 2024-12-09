const express = require('express');
const router = express.Router();
const db = require('../utils/db'); // Database connection
const { validateCrop, handleValidationErrors } = require('../utils/validation');

// GET /api/crops - Fetch all crops
router.get('/', (req, res) => {
  const query = 'SELECT * FROM crops';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// POST /api/crops - Add a new crop
router.post('/', validateCrop, handleValidationErrors, (req, res) => {
  const { name, season } = req.body;
  const query = 'INSERT INTO crops (name, season) VALUES (?, ?)';
  db.query(query, [name, season], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Crop added successfully!', cropId: results.insertId });
  });
});

// GET /api/crops/:id - Fetch crop by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM crops WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Crop not found' });
    }
    res.json(results[0]);
  });
});

// PUT /api/crops/:id - Update crop details by ID
router.put('/:id', validateCrop, handleValidationErrors, (req, res) => {
  const { id } = req.params;
  const { name, season } = req.body;
  const query = 'UPDATE crops SET name = ?, season = ? WHERE id = ?';
  db.query(query, [name, season, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Crop not found' });
    }
    res.json({ message: 'Crop updated successfully!' });
  });
});

// DELETE /api/crops/:id - Delete crop by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM crops WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Crop not found' });
    }
    res.json({ message: 'Crop deleted successfully!' });
  });
});

module.exports = router;
