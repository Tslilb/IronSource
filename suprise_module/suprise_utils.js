const kanye_quote = require("./suprises/kanye-quote");
const chuck_norris_joke = require("./suprises/chuck-norris-joke");
const name_sum = require("./suprises/name-sum");
const distribution=[];
distribution.push("kanye-quote","chuck-norris-joke","name-sum","requests");
distribution["kanye-quote"]=0
distribution["chuck-norris-joke"]=0;
distribution["name-sum"]=0;
distribution["requests"]=0;



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function supriesMe(name,birth_year){

    let joke=false;
    let quote=false;
    let sum=false;

    if(birth_year<=2000) joke=true;
    if(birth_year>2000 && !(name[0]=='A') && !(name[0]=='Z')) quote=true;
    if(!(name[0]=='Q')) sum=true;
    distribution["requests"]++;

    if(joke && sum){
        const rand=getRandomInt(2);
        if (rand == 0) {
            distribution["chuck-norris-joke"]++;
            return await chuck_norris_joke.randomJoke();
        }
        else {
            distribution["name-sum"]++;
            return name_sum.nameSum(name);
        }
    }

    else if(quote && sum){
        const rand=getRandomInt(2);
        if (rand == 0) {
            distribution["kanye-quote"]++;
            return await kanye_quote.randomQuote();
        }
        else{
            distribution["name-sum"]++;
            return name_sum.nameSum(name);
        }
    }

    else if (joke){
        distribution["chuck-norris-joke"]++;
        return await chuck_norris_joke.randomJoke();
    }
    else if (quote) {
        distribution["kanye-quote"]++;
        return await kanye_quote.randomQuote();
    }
    
}

module.exports={supriesMe,distribution};