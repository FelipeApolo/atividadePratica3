function sum(a, b) {
    if (typeof a == "number" && typeof b == "number")
        return a + b;
    else
        return undefined;
}
module.exports = sum;