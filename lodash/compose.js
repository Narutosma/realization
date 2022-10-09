// compose 
function compose(...fn){
    return fn.reduce((a, b) => (...args) => a(b(...args)));
}

// 
const add10 = x => x + 10
const mul10 = x => x * 10
const add100 = x => x + 100

// (10 + 100) * 10 + 10 = 1110
console.log(compose(add10, mul10, add100)(10));