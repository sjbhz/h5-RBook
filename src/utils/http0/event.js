import mitt from 'mitt'
const emitter = mitt()
export default emitter

// 事件总线
// emitter.emit('foo',{a;'b'}) 触发
// emitter.on('foo',e=>{}) 监听
// emitter.all.clear()