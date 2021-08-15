const axios = require("axios");
const dotenv = require('dotenv');
dotenv.config();
const SUPERHERO_TOKEN = process.env.SUPERHERO_TOKEN;
const { SUPERHERO_API } = require("../config");




async function personalHero(id) {

    const biography = await axios.get(`${SUPERHERO_API}/${SUPERHERO_TOKEN}/${id}/biography`)
    const image = await axios.get(`${SUPERHERO_API}/${SUPERHERO_TOKEN}/${id}/image`)
    return {
        personal_status: "you have a match with a superhero!",
        name: biography.data.name,
        creator: biography.data.publisher,
        image: image.data.url,

    };
}

personalHero(29);
module.exports = { personalHero };