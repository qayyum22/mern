const express = require('express');
const jsonPlaceHolderAPIRoutes = require('./jsonplaceholder/routes/jsonPlaceHolderAPIRoutes');
const openWeatherRoutes = require("./openweather/routes/openWeatherRoutes")
const web3 = require("./financialmarkets/routes/web3Routes");
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    }));

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Awesome Tools Backend is Working Fine"
    });
});

app.use("/api/v1/jsonplaceholder", jsonPlaceHolderAPIRoutes);
app.use("/api/v1/openweather", openWeatherRoutes);
app.use("/api/v1/web3", web3);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});