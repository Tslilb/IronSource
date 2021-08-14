const suprise = require("../suprise_module/suprise_utils");


function getInfo() {

    const distribution = suprise.distribution;


    return {
        requests: distribution["requests"],
        distribution: [
            {
                type: "chuck-norris-joke",
                count: distribution["chuck-norris-joke"]
            },
            {
                type: "kanye-quote",
                count: distribution["kanye-quote"]
            },
            {
                type: "name-sum",
                count: distribution["name-sum"]
            }
        ]
    };
}

module.exports = { getInfo };