// promise

const STATE = {
    PENDDING: "pendding",
    FULFILLED: "fulfilled",
    REJECTED: "rejected"
}

function runMicroHandle(callback){
    if(process && process.nextTick){
        process.nextTick(callback);
        return ;
    }
    if(MutationObserver){
        const observe = new MutationObserver(callback);
        const p = document.createElement('p');
        observe.observe(p, {
            childList: true
        });
        p.innerHTML = 1;
        return;
    }
    setTimeout(callback, 0);
}

class MyPromise{
    constructor(executor){
        this._state = STATE.PENDDING;
        this._value = undefined;
        this._task = [];
        try{
            executor(this._resolve.bind(this), this._reject.bind(this));
        }catch(err){
            this._reject(err);
        }
    }

    then(onFulfilled, onRejected){
        return new MyPromise((resolve, reject) => {
            this._pushTaskHandle(onFulfilled, STATE.FULFILLED, resolve, reject);
            this._pushTaskHandle(onRejected, STATE.REJECTED, resolve, reject);
            this._runTaskHandle();
        });
    }

    _runTaskHandle(){
        if(this._state === STATE.PENDDING){
            return ;
        }
        while(this._task[0]){
            this._runTaskOneHandle(this._task[0]);
            this._task.shift();
        }
    }

    _runTaskOneHandle({executor, state, resolve, reject}){
        runMicroHandle(() => {
            if(state !== this._state){
                return;
            }
            if(typeof executor !== 'function'){
                this._state === STATE.FULFILLED ? resolve(this._value) : reject(this._value);
                return ;
            }

            try{
                const res = executor(this._value);
                if(!!(res && typeof res === 'object' && typeof res.then === 'function')){
                    res.then(resolve, reject);
                }else{
                    resolve(this._value);
                }
            }catch(error){
                reject(error);
            }
        });
    }

    _pushTaskHandle(executor, state, resolve, reject){
        this._task.push({
            executor,
            state,
            resolve,
            reject
        });
    }

    _changeState(state, data){
        if(this._state !== STATE.PENDDING){
            return;
        }
        this._state = state;
        this._value = data;
        this._runTaskHandle();
    }

    _resolve(data){
        this._changeState(STATE.FULFILLED, data);
    }

    _reject(data){
        this._changeState(STATE.REJECTED, data);
    }
}

const p = new MyPromise((res) => {
    console.log(1);
    setTimeout(() => {
        res(2);
    }, 1000)
});

p.then((data) => {
    console.log(data);
});
