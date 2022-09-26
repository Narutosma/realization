// call 
Function.prototype.myCall = function(_this, ...list){
    // 当_this没有传递的时候就为windo
    _this = _this || window;
    // 将当前函数绑定到传递需要更改this的对象上，此时调用函数时this就为当前的对象
    // 为了避免与该对象的key重名覆盖，必须为唯一值，所以使用symbol作为key
    const fn = Symbol("fn");
    _this[fn] = this;
    // 将函数调用后取得返回值，再将其属性删掉
    const res = _this[fn](...list);
    delete _this[fn];
    return res;
}

// apply
// apply和call的区别就只有参数的形式不同，apply传的为数组
Function.prototype.myApply = function(_this, list){
    const fn = Symbol("fn");
    _this[fn] = this;
    const res = _this[fn](...list);
    delete _this[fn];
    return res;
}

// bind
// bind的形式和call、apply都不相同，bind会返回一个绑定this的函数
// bind支持柯里化形式传参 
Function.prototype.myBind = function(_this, ...list){
    const fn = Symbol("fn");
    _this[fn] = this;
    return (...list2) => {
        const res = _this[fn](...list, ...list2);
        delete _this[fn];
        return res;
    }
}

// test
let obj = {
    name: "一个"
}

function allName(firstName, lastName) {
    console.log(`我的全名是“${firstName}${this.name}${lastName}”`)
}

// allName.myCall(obj, "L", "K");
// allName.myApply(obj, ["L", "K"]);
const fn = allName.myBind(obj, "L");
console.log(fn);
fn("K");
