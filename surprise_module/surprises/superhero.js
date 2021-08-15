const axios = require("axios");
const dotenv = require('dotenv');
dotenv.config();
const SUPERHERO_TOKEN = process.env.SUPERHERO_TOKEN;
const { SUPERHERO_API } = require("../config");
const name_sum=require('./name-sum');



function getName(){

    return 'superhero';
}

function isEligible(userParams){

    return (name_sum.getResponse(userParams).sum <=731)
}



async function getResponse(userParams) {

    const id=name_sum.getResponse(userParams).sum;
    const biography = await axios.get(`${SUPERHERO_API}/${SUPERHERO_TOKEN}/${id}/biography`)
    const image = await axios.get(`${SUPERHERO_API}/${SUPERHERO_TOKEN}/${id}/image`)
    const name=getName();
    return {
        type:name,
        personal_status: "you have a match with a superhero!",
        name: biography.data.name,
        creator: biography.data.publisher,
        image: image.data.url,

    };
}


module.exports = { getResponse,getName,isEligible };