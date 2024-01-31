function pallinChecker(strInput){
    let newStr = "";
    for(let i = strInput.length-1; i>=0; i--){
        newStr += strInput[i];
    }
    console.log(newStr);
    if(strInput === newStr){
        console.log("given string is a pallindrom string");
    }
    else{
        console.log("give string is not a pallindrom string");
    }
}

pallinChecker("race");
