// sleep 
// js中没有sleep函数
// sleep函数是在执行阶段程序起到暂停作用，使其达到延迟的效果
const sleep = (during) => new Promise(reslove => setTimeout(reslove, during));

// test 
console.log(1);
sleep(1000).then(() => {
    console.log(2);
});

// delay
// delay 函数格式如下，在 N 毫秒之后执行函数，并以函数结果作为返回值
function delay(func, seconds, ...desc){
    return new Promise(reslove => {
        setTimeout(() => {
            Promise.resolve(func(...desc)).then(reslove);
        }, seconds);
    })
}

delay((str) => str, 3000, 'hello, world').then(o => console.log(o));