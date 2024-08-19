// index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file
const { connectDB, sequelize } = require('./config/db'); 

const app = express();

// Import database connection
const db = require('./config/db');

// Import routes
const bookingRoutes = require('./routes/bookings');
const contactRoutes = require('./routes/contact');

app.use(cors());
app.use(express.json());

//My APIs: 
app.use('/api/bookings', bookingRoutes);
app.use('/api/contact', contactRoutes);

// Start the server with database connection and model sync
const startServer = async () => {
  await connectDB(); // Connect to the database

  // Sync models
  try {
      await sequelize.sync({ force: false });
      console.log('Database & tables created!');
  } catch (error) {
      console.error('Error syncing database:', error.message);
      process.exit(1);
  }

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

startServer();