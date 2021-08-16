function getName() {
    return 'name-sum';
}

function isEligible(userParams) {
    return (!(userParams.name[0] == 'Q'));
}


function getResponse(userParams) {

    let sum = 0;
    for (let i = 0; i < userParams.name.length; i++) {
        let curr_letter = userParams.name[i].toLowerCase();
        if (curr_letter == ' ') continue;
        sum += curr_letter.charCodeAt(0) - 96;

    }
    const name = getName();

    return {
        type: name,
        result: sum,
    }

}


module.exports = { getResponse, getName, isEligible };