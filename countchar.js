
//counts how many times "B" is contained in a phrase, the user could chose a different
// character using an extra paramenter 
// e.g couctChar("if you fill in only this parameter I will look of B","c");
//from eloquent JS

function countChar(phrase,char){ return function () {
    let letter = char || "B";
    let len = phrase.length, count = 0;
    for (let i = 0; i < len; i++) {
        if (phrase.charAt(i) == letter) count++;
    }
    return count;
}(char)

}