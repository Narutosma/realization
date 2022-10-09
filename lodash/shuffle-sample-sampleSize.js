// shuffle  洗牌
function shuffle(list){
    if(!Array.isArray(list)) return ;
    // return list.sort(() => Math.random() - 0.5);
    const res = [...list];
    for(let i = list.length - 1; i > 0; --i){
        const index = Math.floor(Math.random() * (i + 1));
        [res[i], res[index]] = [res[index], res[i]];
    }
    return res;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(shuffle(arr));

// sample 从数组中随机取一个
function sample(list){
    if(!Array.isArray(list)) return ;
    return list[Math.floor(Math.random() * list.length)]
}
console.log(sample(arr));

// sampleSize 从数组中随机取n个
function sampleSize(list, n){
    if(!Array.isArray(list)) return ;
    return shuffle(list).slice(0, n);
}

console.log(sampleSize(arr, 3));