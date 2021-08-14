const axios = require("axios");
const { QUOTE_API } = require("../config");



async function randomQuote() {

    const qoute = await axios.get(`${QUOTE_API}`)

    return {
        type: "kanye-quote",
        result: qoute.data,
    };
}

module.exports = { randomQuote };