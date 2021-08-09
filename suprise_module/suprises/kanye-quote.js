const axios = require("axios");



async function randomQuote(){

    const qoute= await axios.get('https://api.kanye.rest')

    return{
        type: "kanye-quote",
        result:qoute.data,
    };
}

module.exports={randomQuote};