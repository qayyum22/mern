const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY;

exports.currentWeatherForecast = async (req, res) => {

    try {
        const response = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=hyderabad&limit=5&appid=d10fa48cfb041cb7f38c2034044203ff");
        const json = await response.json();
        res.send(json);
    } catch (err) {
        console.log(err);
        res.send("Internal Server Error");

    }
};

exports.weatherForTimestamp = async (req, res) => {
    try {
        const response = await fetch('https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=39.099724&lon=-94.578331&dt=1643803200&appid=d10fa48cfb041cb7f38c2034044203ff');
        const json = await response.json();
        res.send(json);
    } catch (err) {
        console.log(err);
        res.send("Internal Server Error");
    }
}

exports.dailyAggregation = async (req, res) => {
    try {
        const response = await fetch('https://api.openweathermap.org/data/3.0/onecall/day_summary?lat=60.45&lon=-38.67&date=2023-03-30&tz=+03:00&appid=d10fa48cfb041cb7f38c2034044203ff')
        const json = response.json();
        res.send(json);
    } catch (err) {
        console.log(err);
        res.send("Internal Server Error")
    }
}