import { App } from 'vue'
import { createStore, mapState } from 'vuex'

type state = {
  [k: string]: any
}

const store = createStore<state>({
  state: {
    // 弹框类型
    popType: 'init',
    // 弹框数据
    popData: {}
  },
  mutations: {
    setState(state, data) {
      const keys = Object.keys(data)
      keys.forEach(k => {
        if (k in state) state[k] = data[k]
      })
    }
  }

})

// 所有state 数据key
const storeKeys = Object.keys(store.state) || []

export default <T>(app: App<T>) => {
  // 应用安装vuex-store
  app.use(store)
  // 全局混入 将state映射到组件computed中
  // 大型项目慎用混入，可能会产生副作用
  app.mixin({ computed: { ...mapState(storeKeys) } })
  // 同时提供修改state的mutation方法
  app.config.globalProperties.setState = (data: object) => {
    store.commit('setState', data)
  }
}
