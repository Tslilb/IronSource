const axios = require("axios");
const { QUOTE_API } = require("../config");



function getName(){
    return 'kanye-quote'
}

function isEligible(userParams){

    return (userParams.birth_year > 2000 && !(userParams.name[0] == 'A') && !(userParams.name[0] == 'Z'))

}

async function getResponse(userParams) {

    const qoute = await axios.get(`${QUOTE_API}`)
    const name= getName();

    return {
        type: "kanye-quote",
        result: qoute.data,
    };
}

module.exports = { getResponse,getName,isEligible };