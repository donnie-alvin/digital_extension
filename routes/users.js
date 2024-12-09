const express = require('express');
const router = express.Router();
const db = require('../utils/db'); // Database connection
const { validateUser, handleValidationErrors } = require('../utils/validation');
const bcrypt = require('bcrypt');

// GET /api/users - Fetch all users
router.get('/', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// POST /api/users - Create a new user
router.post('/', validateUser, handleValidationErrors, (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(query, [name, email, hashedPassword], (err, results) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ error: 'Email already exists' });
      }
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'User created successfully!', userId: results.insertId });
  });
});

// GET /api/users/:id - Fetch user by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM users WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(results[0]);
  });
});

// PUT /api/users/:id - Update user details by ID
router.put('/:id', validateUser, handleValidationErrors, (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  const hashedPassword = password ? bcrypt.hashSync(password, 10) : null;
  const query = 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?';
  db.query(query, [name, email, hashedPassword || password, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'User updated successfully!' });
  });
});

// DELETE /api/users/:id - Delete user by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'User deleted successfully!' });
  });
});

module.exports = router;
