const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./Config/db');
const restaurantRoutes = require('./Routes/restaurantroutes');

// Initialize app and connect to DB
const app = express();
connectDB();

app.use(bodyParser.json());

// Routes
app.use('/api/restaurants', restaurantRoutes);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
