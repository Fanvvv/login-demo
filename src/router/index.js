import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 使用 webpack 的 require.context(); 方法将路由导入
/**
 * 第一个参数：url，路径，要搜索的目录
 * 第二个参数：是否遍历目录下的子目录，boolean
 * 第三个参数：匹配文件的正则表达式
 */
const file = require.context('./', false, /\.router.js$/)
const routes = []
// console.log(file,file.keys());

file.keys().map((value) => {
  console.log(file(value).default);
  routes.push(...file(value).default)
})
console.log(routes);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
