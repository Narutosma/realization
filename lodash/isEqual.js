// 深比较
function isEqual(val1, val2){
    // 类型不相同
    if(typeof val1 !== typeof val2) return false;
    // 类型相同， 分为基本数据类型和引用数据类型
    // 引用数据类型
    if(typeof val1 === "object"){
        if(Object.prototype.toString.call(val1) !== Object.prototype.toString.call(val2)) return false;
        if(Object.keys(val1).length !== Object.keys(val2).length) return false;
        for (const key in val1) {
           if(!isEqual(val1[key], val2[key])){
             return false;
           }
        }
        return true;
    }
    // 基本数据类型
    return val1 === val2;
}

const obj = {
    a: 1,
    b: "string",
    c: true,
    d: {
        e: 1,
        f: "string",
        g: {
            h: 1,
            i: "string",
        },
        k: [1, "string", false, {l: 1, m: "string", n: {o: 1,p:"string", q: false}}, [1,3,6]]
    },
    r: [1, "2", false, {s: 1, t: "string"}]
}

const obj2 = {
    a: 1,
    b: "string",
    c: true,
    d: {
        e: 1,
        f: "string",
        g: {
            h: 1,
            i: "string",
        },
        k: [1, "string", false, {l: 1, m: "string", n: {o: 1,p:"string", q: false}}, [1,3,6]]
    },
    r: [1, "2", false, {s: 1, t: "string"}]
}
console.log(isEqual(obj, obj2));