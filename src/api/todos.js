import service from './requset'

// 获取所有的 todos
export const getTodos = () => {
  return service({
    url: '/example/1593346710175',
    method: 'get'
  })
}