let demo = document.querySelector("#demo");
let n = 0;
let string = "你好, 我是一名前端新人";
demo.innerHTML = string.substring(0, n) // 左闭右开
;
let step = ()=>{
    setTimeout(()=>{
        if (n >= string.length) return;
        n = n + 1;
        demo.innerHTML = string.substring(0, n);
        // 递归
        step();
    }, 200);
};
step() // step() // 注意这样写会在1s后变成3
;

//# sourceMappingURL=index.a55e37f1.js.map
