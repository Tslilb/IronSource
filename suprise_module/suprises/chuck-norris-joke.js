const axios = require("axios");
const { JOKE_API } = require("../config");




async function randomJoke() {

    const jokes = await axios.get(`${JOKE_API}`)
    return {
        type: "chuck-norris-joke",
        result: jokes.data.value,
    };
}


module.exports = { randomJoke };