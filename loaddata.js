const mongoose = require('mongoose');
const Restaurant = require('./Models/restaurant.js')
const parseCSV = require('./Utils/csvparser.js')
const path = require('path');

// Connect to MongoDB
const connectDB = require('./Config/db.js');
connectDB();

const filePath = path.join(__dirname, './Assets/zomato.csv');

// Parse CSV and insert into MongoDB
parseCSV(filePath, async (restaurants) => {
    try {
      const operations = restaurants.map((r) => ({
        updateOne: {
          filter: { restaurantId: r['Restaurant ID'] },
          update: {
            $set: {
              name: r['Restaurant Name'],
              countryCode: parseInt(r['Country Code']),
              city: r['City'],
              address: r['Address'],
              locality: r['Locality'],
              localityVerbose: r['Locality Verbose'],
              longitude: parseFloat(r['Longitude']),
              latitude: parseFloat(r['Latitude']),
              cuisines: r['Cuisines'] ? r['Cuisines'] : 'Unknown', // Handle missing cuisines
              averageCostForTwo: parseInt(r['Average Cost for two']),
              currency: r['Currency'],
              hasTableBooking: r['Has Table booking'],
              hasOnlineDelivery: r['Has Online delivery'],
              isDeliveringNow: r['Is delivering now'],
              switchToOrderMenu: r['Switch to order menu'],
              priceRange: parseInt(r['Price range']),
              aggregateRating: parseFloat(r['Aggregate rating']),
              ratingColor: r['Rating color'],
              ratingText: r['Rating text'],
              votes: parseInt(r['Votes']),
            },
          },
          upsert: true, // Update if exists, insert if not
        },
      }));
  
      await Restaurant.bulkWrite(operations);
      console.log('Data loaded/upserted successfully!');
      mongoose.disconnect();
    } catch (err) {
      console.error('Error loading data:', err);
      mongoose.disconnect();
    }
  });
  
