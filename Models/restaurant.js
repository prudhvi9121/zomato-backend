const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  restaurantId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  countryCode: { type: Number, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  locality: { type: String },
  localityVerbose: { type: String },
  longitude: { type: Number },
  latitude: { type: Number },
  cuisines: { type: String, required: false },
  averageCostForTwo: { type: Number },
  currency: { type: String },
  hasTableBooking: { type: String },
  hasOnlineDelivery: { type: String },
  isDeliveringNow: { type: String },
  switchToOrderMenu: { type: String },
  priceRange: { type: Number },
  aggregateRating: { type: Number },
  ratingColor: { type: String },
  ratingText: { type: String },
  votes: { type: Number },
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
