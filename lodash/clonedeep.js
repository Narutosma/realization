// 深度克隆对象

function cloneDeep(obj){
    if(obj === null) return null;
    if(typeof obj === 'object'){
        // const result = Array.isArray(obj) ? [] : {};
        // if(Array.isArray(obj)){
        //     for(let i = 0; i < obj.length; ++i){
        //         result.push(cloneDeep(obj[i]));
        //     }
        // }else{
        //     for (const key in obj) {
        //         result[key] = cloneDeep(obj[key]);
        //     }
        // }
        // return result;
        const result = Array.isArray(obj) ? [] : {};
        for (const key in obj) {
            result[key] = cloneDeep(obj[key]);
        }
        return result;
    }else{
        return obj;
    }
}

// test
// const obj = {
//     a: 1,
//     b: "string",
//     c: true,
//     d: {
//         e: 1,
//         f: "string",
//         g: {
//             h: 1,
//             i: "string",
//         },
//         k: [1, "string", false, {l: 1, m: "string", n: {o: 1,p:"string", q: false}}, [1,3,6]]
//     },
//     r: [1, "2", false, {s: 1, t: "string"}]
// }

// const cloneObj = clonedeep(obj);
// obj.d.k[3].l = 999;
// console.log(cloneObj);
// console.log(cloneObj.d.k[3]);

const obj = {
    re: /hello/,
    f () {},
    date: new Date(),
    map: new Map(),
    list: [1, 2, 3],
    a: 3,
    b: 4
  }

console.log(cloneDeep(obj));