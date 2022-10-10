// keyBy 
function keyBy(list, by){
    return list.reduce((a, b) => {
        a[by(b)] = b;
        return a;
    }, {});
}

console.log(keyBy([{ id: 1, name: '山月' }, { id: 2, name: 'shanyue' }], x => x.id));