const axios = require("axios");
const { JOKE_API } = require("../config");




function getName(){
    return 'chuck-norris-joke'
}

function isEligible(userParams){

    return (userParams.birth_year <= 2000);

}

async function getResponse(userParams) {

    const jokes = await axios.get(`${JOKE_API}`)
    const name=getName();
    return {
        type: name,
        result: jokes.data.value,
    };
}


module.exports = { getResponse,getName,isEligible };