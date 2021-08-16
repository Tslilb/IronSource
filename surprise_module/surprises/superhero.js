const axios = require('axios');
const dotenv = require('dotenv');


dotenv.config();
const SUPERHERO_TOKEN = process.env.SUPERHERO_TOKEN;
const SUPERHERO_API = 'https://superheroapi.com/api'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getName() {
    return 'superhero';
}

function isEligible(userParams) {
    return !userParams.name.includes(" ");
}

async function getResponse(userParams) {
    const id = getRandomInt(731);
    const biography = await axios.get(`${SUPERHERO_API}/${SUPERHERO_TOKEN}/${id}/biography`)
    const image = await axios.get(`${SUPERHERO_API}/${SUPERHERO_TOKEN}/${id}/image`)
    const name = getName();
    return {
        type: name,
        result: {
            name: biography.data.name,
            creator: biography.data.publisher,
            image: image.data.url,
        },

    };
}


module.exports = { getResponse, getName, isEligible };