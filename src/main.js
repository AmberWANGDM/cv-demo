let html = document.querySelector('#html')
let style = document.querySelector('#style')
let n = -1
let string = `
/* 你好, 我是一名前端新人
 * 接下来
 * 演示一下我的前端功底
 * 首先我要准备一个div
 **/
#div1{
  border:1px solid red;
  width:200px;
  height:200px;
}
/* 接下来, 我要把div变成一个八卦图
 * 首先, 把div变成一个圆
 **/
#div1{
  border-radius:50%;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before{
  width:100px;
  height:100px;
  top:0;
  left:50%;
  transform:translateX(-50%);
  background:black;
  border-radius:50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
  width:100px;
  height:100px;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  background:white;
  border-radius:50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`
let showString = ''

let step = () => {
  setTimeout(() => {
    if (n >= string.length - 1) return
    n = n + 1
    if (string[n] === '\n') {
      // 如果是换行,就加换行标签
      showString += '<br>'
    } else if (string[n] === ' ') {
      showString += '&nbsp;' // 代码缩进
    } else {
      showString += string[n]
    }
    html.innerHTML = showString
    style.innerHTML = string.substring(0, n)
    // 页面滚动到最下方
    window.scrollTo(0, 99999)
    html.scrollTo(0, 99999)
    step()
  }, 3)
}

step()
