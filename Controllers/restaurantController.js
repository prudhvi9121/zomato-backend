const Restaurant = require('../Models/restaurant')

// Get restaurant by ID
const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({ restaurantId: req.params.id });
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get list of restaurants with pagination
const getRestaurants = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  try {
    const restaurants = await Restaurant.find().skip(skip).limit(limit);
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getRestaurantById, getRestaurants };
