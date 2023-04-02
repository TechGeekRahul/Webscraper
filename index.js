const cheerio = require("cheerio");
const axios = require("axios");

const url = "https://www.1mg.com/all-diseases/acne-261";


async function getGenre() {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data)
        const genre = $("div").text();
        console.log(genre)
    }

    catch (error) {
        console.error(error);
    }
}
getGenre();
