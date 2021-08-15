const dict = { ' ': 0, 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26 };

function getName(){
    return 'name-sum';
}

function isEligible(userParams){
    return (!(userParams.name[0] == 'Q'));
}


function getResponse(userParams) {

    let sum = 0;
    for (let i = 0; i < userParams.name.length; i++) {
        let curr_letter = userParams.name[i].toLowerCase();
        sum += dict[curr_letter];
    }
    const name=getName();

    return{ 
        type :name,
        sum : sum,
    
    }

}


module.exports = { getResponse,getName,isEligible };