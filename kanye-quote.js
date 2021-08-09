const axios = require("axios");



async function randomQuote(){

    const qoute= await axios.get(' https://api.kanye.rest')

    return qoute.data,
    


}

module.exports={randomQuote};