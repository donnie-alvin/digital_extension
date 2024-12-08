const express = require('express');
const router = express.Router();
const db = require('../utils/db'); // Database connection

// Example GET route
router.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

module.exports = router;
