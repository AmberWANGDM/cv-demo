let demo = document.querySelector('#demo')
let n = -1
let string = `你好, 我是一名前端新人
接下来我要加样式了
我要加的样式是
body {
  color:red;
}
`
let showString = ''
// string = string.replace(/\n/g, '<br>')
demo.innerHTML = string.substring(0, n)

let step = () => {
  setTimeout(() => {
    if (n >= string.length - 1) return
    n = n + 1
    if (string[n] === '\n') {
      // 如果是换行,就加换行标签
      showString += '<br>'
    } else {
      showString += string[n]
    }
    demo.innerHTML = showString
    step()
  }, 50)
}

step()
