let inputArray = [1,1,1];
let newArray = [ ...inputArray ];

const arrayReplace = (inputArray, elemToReplace, substitutionElem) => {
    for (let i = 0; i< inputArray.length; i++){
        if(inputArray[i] === elemToReplace){
            newArray[i] = substitutionElem;
        }
    }
    return newArray;
}

console.log(arrayReplace (inputArray, 1, 7));
