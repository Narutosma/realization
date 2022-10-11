// chunk
function chunk(list, size){
    const l = [];
    for(let i = 0; i < list.length; ++i){
        const index = Math.floor(i / size);
        l[index] ??= [];
        l[index].push(list[i]);
    }
    return l;
}


const arr = [1, 2, 3, 4 ,5 ,6 ,7 ,8, 9, 0];
console.log(chunk(arr, 3));