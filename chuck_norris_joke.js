const axios = require("axios");
const { CHUCK_TOKEN } = require("./config");



async function randomJoke(){

    const jokes= await axios.get('https://api.chucknorris.io/jokes/random')

    return {
        joke: jokes.data.value,
    };
}


module.exports={randomJoke};