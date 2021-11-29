//for循环
function factorial1(x) {
    let y = 1;
    for (let i = 1; i <= x; i++) {
        y *= i;
    }
    return y;
}
console.log(factorial1(5));

//递归
function factorial2(n) {
    if (n === 1)
        return n;
    else
        return n * factorial2(n - 1);
}
console.log(factorial2(6));