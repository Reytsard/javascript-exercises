const removeFromArray = function(...args) {
    let copyArr = args[0];
    for(let i = 1; i < args.length; i++){
        if(copyArr.includes(args[i])){
            let leftSide = copyArr.slice(0,copyArr.indexOf(args[i]));
            let rightSide = copyArr.slice(copyArr.indexOf(args[i]) + 1);
            copyArr = leftSide.concat(rightSide);
        }
    }
    return copyArr;
};

// Do not edit below this line
module.exports = removeFromArray;
