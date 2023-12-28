const express = require("express");
const router = express.Router();

const { currentWeatherForecast, weatherForTimestamp, dailyAggregation } = require("../../openweather/controllers/weatherAPI");


router.get("/getweather", currentWeatherForecast);
router.get("/weatherfortimestamp", weatherForTimestamp);
router.get("/dailyaggregation", dailyAggregation);
module.exports = router;