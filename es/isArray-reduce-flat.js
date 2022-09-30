// isArray
function isArray(list){
    return Object.prototype.toString.call(list) === "[object Array]";
}

console.log(isArray({}));
console.log(isArray(1));
console.log(isArray([]));

// reduce
function reduce(list, fn, ...init){
    let next = init.length ? list[0] : init[0];
    for(let i = init.length ? 0 : 1; i < list.length; ++i){
        next = fn(next, list[i], i);
    }
    return next;
}

// flat
function flat(list, deep = 1){
    if(deep === 0) return list;
    return list.reduce((a, b) => a.concat(isArray(b) ? flat(b, deep - 1) : b), []);
}

const arr = [1, 2, 3, [4, 5, [6, 7, [8, [9, [0]]]]]];
console.log(flat(arr, 6));