// once
function once(fn){
    let res;
    return (...args) => {
        if(res) return res;
        res = fn(...args)
        return res;
    }
}


const f = x => x

const onceF = once(f)

//=> 3
console.log(onceF(3));

//=> 3
console.log(onceF(4));

