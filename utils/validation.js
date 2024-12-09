const { body, validationResult } = require('express-validator');

// Validation middleware for users
const validateUser = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Email must be a valid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

// Validation middleware for crops
const validateCrop = [
  body('name').notEmpty().withMessage('Name is required'),
  body('season').notEmpty().withMessage('Season is required'),
];

// Validation middleware for products
const validateProduct = [
  body('name').notEmpty().withMessage('Name is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('price').isNumeric().withMessage('Price must be a numeric value'),
];

// Validation middleware for officers
const validateOfficer = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Email must be a valid email address'),
  body('phone').isNumeric().withMessage('Phone must be a numeric value'),
];

// Validation middleware for feedback
const validateFeedback = [
  body('user_id').isNumeric().withMessage('User ID must be a numeric value'),
  body('message').notEmpty().withMessage('Message is required'),
];

// Error handler middleware
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateUser,
  validateCrop,
  validateProduct,
  validateOfficer,
  validateFeedback,
  handleValidationErrors,
};
