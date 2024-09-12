const express = require('express');
const { getRestaurantById, getRestaurants } = require('../Controllers/restaurantController');
const router = express.Router();

router.get('/:id', getRestaurantById);
router.get('/', getRestaurants);

module.exports = router;
