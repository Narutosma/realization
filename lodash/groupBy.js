// groupBy 
function groupBy(list, by){
    return list.reduce((a, b) => {
        if(a[by(b)]){
            a[by(b)].push(b);
        }else{
            a[by(b)] = [b];
        }
        return a;
    },{})
}


const g = groupBy([
    { id: 1, name: '山月', sex: 'male' },
    { id: 2, name: '张三', sex: 'female' },
    { id: 3, name: '李四', sex: 'female' }
  ], x => x.sex);
  console.log(g);
