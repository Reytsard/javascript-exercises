const repeatString = function(string, num) {
    let newString = ""
    if(num > 0) {
        for(let i = 0; i < num; i++){
            newString = newString.concat(string);
        }
    return newString;
    }else if(num == 0) return "";
    else return "ERROR";
}

// Do not edit below this line
module.exports = repeatString;
