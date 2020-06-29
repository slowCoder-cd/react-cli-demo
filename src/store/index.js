import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'

// 创建一个 store 仓库 异步加载action 两个参数 一个reducer更新数据的方法 第二个参数是中间件
// 中间就是在action与reducer之间又加了一层，没有中间件的Redux的过程是：action -> reducer，而有了中间件的过程就是action -> middleware -> reducer，使用中间件我们可以对action也就是对dispatch方法进行装饰，我们可以用它来实现异步action、打印日志、错误报告等功能。
export default createStore(reducer, applyMiddleware(thunk))