const kanye_quote = require("./suprises/kanye-quote");
const chuck_norris_joke = require("./suprises/chuck-norris-joke");
const name_sum = require("./suprises/name-sum");
const superhero = require("./suprises/superhero");
var distribution = {"kanye-quote":0, "chuck-norris-joke":0, "name-sum":0, "superhero":0, "requests":0}




function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function supriesMe(name, birth_year) {

    distribution["requests"]++;
    let joke = false;
    let quote = false;
    let sum = false;
    let hero = false;
    const name_value = name_sum.nameSum(name);

    hero = (name_value <= 731);
    if (birth_year <= 2000) joke = true;
    if (birth_year > 2000 && !(name[0] == 'A') && !(name[0] == 'Z')) quote = true;
    if (!(name[0] == 'Q')) sum = true;




    if (joke && sum) {
        const rand = getRandomInt(3);
        if (rand == 0) {
            distribution["chuck-norris-joke"]++;
            return await chuck_norris_joke.randomJoke();
        }
        else if (rand == 1) {
            distribution["name-sum"]++;
            return name_value;
        }
        else if (rand == 2 && hero) {
            distribution["superhero"] ++;
            return superhero.personalHero(name_value);
        }
    }

    else if (quote && sum) {
        const rand = getRandomInt(3);
        if (rand == 0) {
            distribution["kanye-quote"]++;
            return await kanye_quote.randomQuote();
        }
        else if (rand == 1) {
            distribution["name-sum"]++;
            return name_value;
        }
        else if (rand == 2 && hero) {
            distribution["superhero"] ++;
            return superhero.personalHero(name_value);
        }
    }

    else if (joke) {
        distribution["chuck-norris-joke"]++;
        return await chuck_norris_joke.randomJoke();
    }
    else if (quote) {
        distribution["kanye-quote"]++;
        return await kanye_quote.randomQuote();
    }
    else if (sum) {
        distribution["name-sum"]++;
        return name_value;
    }

}

module.exports = { supriesMe, distribution };