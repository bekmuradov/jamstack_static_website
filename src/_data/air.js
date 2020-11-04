const axios = require("axios");
const countries = require("./countries.json")
require("dotenv").config()

async function getAir(country) {
    try {
        const res = await axios.get(`https://api.airvisual.com/v2/states?country=${country}&key=${process.env.AIR_INDEX_API_KEY}`)
        return {
            "country": country,
            "data": res.data.data
        }
    } catch (error) {
        console.error(error);
    }
}
module.exports = async () => {
    let airPromises = countries.map(getAir)
    return Promise.all(airPromises).then(airObjects => {
        console.log("airObjects: ", airObjects);
        return [].concat.apply([], airObjects)
    })
}