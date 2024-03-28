import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

// import { useUserStore } from './modules/user.js'
// export { useUserStore }
//等价于
export * from './modules/user.js'

export default pinia
