const sumAll = function(a, b) {
    
    if(typeof a == "number" && typeof b == "number" && a >= 0 && b >= 0){
        let sum = 0;
        if(a > b){
            for(let i = b; b <= a; i++){
                sum += i;
            }
            
        }else {
            for(let i = a; a <= b; i++){
                sum += i;
            }
            
        }
        return sum;
    }else{
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = sumAll;
