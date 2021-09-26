const { performance } = require("perf_hooks");

function addUpTo(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    // return total;

    return n * (n + 1) / 2;
}

const t1 = performance.now();
console.log(addUpTo(4));
const t2 = performance.now();
console.log(t2-t1);