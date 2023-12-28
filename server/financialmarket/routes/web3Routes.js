const express = require('express');
const router = express.Router();

const {web3test} = require("../controllers/web3");

router.get("/web3test", web3test);

module.exports = router;