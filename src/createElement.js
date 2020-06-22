import React from 'react'
// React.createElement() 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象：

const craEle = React.createElement(
  // jsx 原理 第一个属性是 标签名 第二个是 标签内属性 后面的都是标签内部的dom 节点
  // 等价于 <div title="createElement标题 jsx 原理" class="demos"><h1>createElement主标题</h1><h2>createElement副标题</h2></div>
  'div',
  {
    title: 'createElement标题 jsx 原理',
    className: 'demos'
  },
  React.createElement(
    'h1',
    null,
    'createElement主标题'
  ),
  React.createElement(
    'h2',
    null,
    'createElement副标题'
  )
)

export default craEle