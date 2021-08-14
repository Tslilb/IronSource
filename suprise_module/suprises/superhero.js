const axios = require("axios");
const { SUPERHERO_API,SUPERHERO_TOKEN } = require("../config");




async function personalHero(id) {

    const biography= await axios.get(`${SUPERHERO_API}/${id}/biography`)
    const image =await axios.get(`${SUPERHERO_API}/${id}/image`)
    return {
        personal_status: "you have a match with a superhero!",
        name : biography.data.name,
       // first_appearance: biography.data.first-appearance,
        image:image.data.url,
        
    };
}


module.exports = { personalHero };