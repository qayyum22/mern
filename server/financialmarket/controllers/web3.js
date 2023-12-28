
exports.web3test = async (req, res) => {
    try {
        let response = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/category", {
            headers: {
                "X-CMC_PRO_API_KEY": 'afe62a12-6a19-4c2f-8658-889285937fff',
            },
        });
        let json = await response.json();
        res.send(json);
    } catch (err) {
        console.log(err);
        res.send("Internal Server Error");
    }
}