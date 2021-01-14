const axios = require("axios");
const countries_code = require("../countries_code.json")
require("dotenv").config()

async function getNews(country) {
    try {
        // const res = await axios.get(`http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}`)
        const res = await axios.get(`https://gnews.io/api/v4/top-headlines?country=${country}&max=6&token=${process.env.GNEWS_API_KEY}`)
        return {
            "country": country,
            "articles": res.data.articles
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports = async () => {
    let newsPromises = countries_code.map(getNews)
    return Promise.all(newsPromises).then(newsObject => {
        console.log("newsObject: ", newsObject);
        return [].concat.apply([], newsObject)
    })
}