function multiply() {
    if (!arguments.length) return 0;

    let res = 1;

    for (let i = 0; i < arguments.length; i++) {
        res = res * arguments[i];
    }

    return res;
}

console.log(multiply(1, 5, 10, 20))

function multy() {
    if (!arguments) return 0;
    let res = 1;
    for (let i = 0; i < arguments.length; i++) {
        res = res * arguments[i];
    }
    return res;
}