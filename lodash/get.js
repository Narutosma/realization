// get
function get(obj, path, defalutVal){
    if(obj === null) return defalutVal;
    // 数组的情况
    if(Object.prototype.toString.call(path) === "[object Array]"){
        return path.reduce((a, b) => {
            return a[b] || defalutVal;
        }, obj);
        // let res = obj;
        // for (const key in path) {
        //     res = !!!key ? res[key] : defalutVal;
        // }
        // return res;
    }
    // 字符串的情况
    if(typeof path === "string"){
        const arr = path.split(".");
        const res = [];
        // 先这样，后面在想办法优化
        for(let i = 0; i < arr.length; ++i){
            const index = arr[i].indexOf("[");
            if(index > -1){
                res.push(arr[i].substring(0,index));
                let str = "";
                for(let j = 1; j < arr[i].substring(index).length; ++j){
                    if(arr[i].substring(index)[j] === "]") break;
                    str += arr[i].substring(index)[j];
                }
                res.push(str);
            }else{
                res.push(arr[i]);
            }
        }
        return get(obj, res, defalutVal);
    }
    return defalutVal;
}

const object = { 'a': [{ 'b': { 'c': 3 } }] }
console.log(get(object, 'a[0].b.c'));
// => 3
console.log(get(object, ['a', '0', 'b', 'c']));
// => 3
console.log(get(object, 'a.b.c', 'default'));