const express = require('express');
const router = express.Router();
const db = require('../utils/db'); // Database connection

// POST /articles - Add a new article
router.post('/', (req, res) => {
  const { title, content, author } = req.body;
  const query = 'INSERT INTO articles (title, content, author) VALUES (?, ?, ?)';
  db.query(query, [title, content, author], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Article added successfully', id: results.insertId });
  });
});

// GET /articles - Get all articles
router.get('/', (req, res) => {
  const query = 'SELECT * FROM articles';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// GET /articles/:id - Get an article by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM articles WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(results[0]);
  });
});

// PUT /articles/:id - Update an article by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  const query = 'UPDATE articles SET title = ?, content = ?, author = ? WHERE id = ?';
  db.query(query, [title, content, author, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json({ message: 'Article updated successfully' });
  });
});

// DELETE /articles/:id - Delete an article by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM articles WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json({ message: 'Article deleted successfully' });
  });
});

module.exports = router;
