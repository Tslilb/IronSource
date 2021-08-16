const axios = require('axios');
const JOKE_API = 'https://api.chucknorris.io/jokes/random'


function getName() {
    return 'chuck-norris-joke';
}

function isEligible(userParams) {
    return userParams.birth_year <= 2000;
}

async function getResponse(userParams) {
    const jokes = await axios.get(`${JOKE_API}`)
    return {
        type: getName(),
        result: jokes.data.value,
    };
}

module.exports = { getResponse, getName, isEligible };