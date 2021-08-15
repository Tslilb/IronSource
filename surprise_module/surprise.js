const kanye_quote = require("./surprises/kanye-quote");
const chuck_norris_joke = require("./surprises/chuck-norris-joke");
const name_sum = require("./surprises/name-sum");
const superhero = require("./surprises/superhero");
const { response } = require("express");
let numRequests = 0;
const distribution = {};
const surpriseModules = [kanye_quote, chuck_norris_joke, name_sum, superhero];


function logRequest(moduleName) {
    numRequests++;
    const name = moduleName.getName();
    if (!distribution[name])
        distribution[name] = 0;
    distribution[name] = distribution[name] + 1;
}

function getStats() {
    const distrubutionStats = [];

    for (let i = 0; i < surpriseModules.length; i++) {
        let curr_name = surpriseModules[i].getName();
        distrubutionStats.push({ type: curr_name, count: 0 })
    }
    for (let i = 0; i < distrubutionStats.length; i++) {
        if (distribution[distrubutionStats[i].type]) {
            distrubutionStats[i].count = distribution[distrubutionStats[i].type];
        }
    }

    return {
        requests: numRequests,
        distribution: distrubutionStats,
    };
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// userParams is a dictionary containing the user params (birth year, name), can be expanded in the future easily.
async function surpriesMe(name, birth_year) {
    const userParams = { name: name, birth_year: birth_year };
    const eligibleModules = [];

    for (let i = 0; i < surpriseModules.length; i++) {

        if (surpriseModules[i].isEligible(userParams))
            eligibleModules.push(surpriseModules[i]);
    }

    const selectedModule = eligibleModules[getRandomInt(eligibleModules.length)];
    const response = await selectedModule.getResponse(userParams);
    if(response){
    logRequest(selectedModule);
    return response;
    }
}

module.exports = { surpriesMe, getStats };


