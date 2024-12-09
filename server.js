const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/users', require('./routes/users'));
app.use('/farmers', require('./routes/farmers'));
app.use('/products', require('./routes/products'));
app.use('/orders', require('./routes/orders'));
app.use('/articles', require('./routes/articles'));

// Default Route
app.get('/', (req, res) => {
  res.send('Digital Extension Services API is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
