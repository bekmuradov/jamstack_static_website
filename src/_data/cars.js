const axios = require("axios");
require("dotenv").config()

module.exports = async () => {
    try {
        const res = await axios.get(`https://www.fake-api.com/api/${process.env.CARS_API_ENDPOINT}`)
        return res.data.response.data.cars
    } catch (error) {
        console.error(error);
    }
}