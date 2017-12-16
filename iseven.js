//recursion eloquent js
function isEven(n) {
    if (n < 0) return ("please insert a positive number!!");
    if (n == 1) return false;
    if (n == 0) return true;
    else return isEven(n - 2);
}
