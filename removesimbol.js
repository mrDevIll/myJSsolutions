//from codewar remove "!" from a string use: removeSymbol.rm("string", "symbol");


(function(exports){
    let tmp = "";
    exports.rm = function(string, symbol="!"){
        for (let i=0; i<string.length; i++){
            if(string[i] != symbol) tmp += string[i];  
        }
    console.log(tmp);
    tmp="";
    
    }; 
}(removeSymbol = {}))