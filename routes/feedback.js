const express = require('express');
const router = express.Router();
const db = require('../utils/db'); // Database connection
const { validateFeedback, handleValidationErrors } = require('../utils/validation');

// GET /api/feedback - Fetch all feedback entries
router.get('/', (req, res) => {
  const query = 'SELECT * FROM feedback';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// POST /api/feedback - Submit feedback
router.post('/', validateFeedback, handleValidationErrors, (req, res) => {
  const { user_id, message } = req.body;
  const query = 'INSERT INTO feedback (user_id, message) VALUES (?, ?)';
  db.query(query, [user_id, message], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Feedback submitted successfully!', feedbackId: results.insertId });
  });
});

module.exports = router;
