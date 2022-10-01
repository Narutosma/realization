// throttle 节流
function throttle(fn, during){
    let timer;
    return (...list) => {
        if(timer) return;
        timer = setTimeout(() => {
            fn(...list);
            timer = null;
        }, during);
    }
}

// debounce 防抖
function debounce(fn, during){
    let timer;
    return (...list) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...list);
        }, during);
    }
}