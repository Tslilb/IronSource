const axios = require('axios');
const QUOTE_API = 'https://api.kanye.rest'



function getName() {
    return 'kanye-quote';
}

function isEligible(userParams) {
    return userParams.birth_year > 2000
        && userParams.name[0] != 'A'
        && userParams.name[0] != 'Z';
}

async function getResponse(userParams) {
    const res = await axios.get(`${QUOTE_API}`)

    return {
        type: getName(),
        result: res.data.quote,
    };
}

module.exports = { getResponse, getName, isEligible };