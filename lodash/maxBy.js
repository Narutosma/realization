// maxBy 
function maxBy(list, by){
    // by 为字符串的时候
    if(typeof by === 'string'){
        // 暂时不考虑对象内的不存在key的情况
        return maxBy(list, (o) => {
            by.split(".").forEach(item => {
                o = o[item];
            })
            return o;
        });
    }
    // by 为函数的时候
    return list.reduce((a, b) => {
        return by(a) > by(b) ? a: b;   
    })
}

const data = [{ value: 6, a: {b: 1} }, { value: 12, a: {b: 4} }, { value: 4, a: {b: 13} }]

//=> { value: 6 }
const max = maxBy(data, x => x.value);
const max2 = maxBy(data, "a.b");
console.log(max);
console.log(max2);
