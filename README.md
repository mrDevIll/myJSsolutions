 # myJSsolutions
 
 From eloquen javascript:

 let halfPyramid = function (n) {
        let str = ""; 
        for (let i=0; i<n; i++){
            str += '#'.repeat(i+1) + "\n";
        }
        return str;
    }
    
    let fizzBuzz1 = function (){
            for (let i = 1; i <= 100; i++) {
                if (i%3 == 0) console.log("Fizz");
                else if (i%5 == 0) console.log("Buzz");
                else console.log(i);
            }}
    let fizzBuzz2 = function () {
        for (let i = 1; i <= 100; i++) {
            if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
            else if (i % 3 == 0) console.log("Fizz");
            else if (i % 5 == 0) console.log("Buzz");
            else console.log(i);
        }
    }

    //chessboard
    let chessBoard = function(n){
        let str = "";
            for (let i = 0; i < n; i++) {
                for (let m = 0; m < n; m++) {
                    ((i + m) % 2 == 0) ? str += " " : str += "#";
            }
                console.log(str); str = "";
            }
    }

//Exercise recursion eloquent js
function isEven(n) {
        if (n < 0) return ("please insert a positive number!!");
        if (n == 1) return false;
        if (n == 0) return true;
        else return isEven(n - 2);
    }

countChar = function countBs(phrase, char) {
        let letter = char || "B";
        let len = phrase.length, count = 0;
        for (let i = 0; i < len; i++) {
            if (phrase.charAt(i) == letter) count++;
        }
        return count;
    }

    function range(start, end, step = 1) {
        let arr = [], r;
        if (end > start) r = (end - start);
        if (start > end) r = (start - end);

        let i = 0;
        let temp = start;
        while (i <= r) {

            arr.push(temp);
            temp += step;
            i++;
        }
        return arr
    }

    function sum(arr) {
        let somma = 0;
        for (let i = 0; i < arr.length; i++) {
            somma += arr[i];
        }
        return somma;
    }
