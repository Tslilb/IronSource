const axios = require("axios");




async function randomJoke(){

    const jokes= await axios.get('https://api.chucknorris.io/jokes/random')
    return{
        type: "chuck-norris-joke",
        result:jokes.data.value,
    };
}


module.exports={randomJoke};