
export default [{
  path: '/signin',
  component: () => import(/*webpackChunkName: "signin"*/"@/views/user/SignIn.vue")
}, {
  path: '/signup',
  component: () => import(/*webpackChunkName: "signup"*/"@/views/user/SignUp.vue")
}, {
  path: '/forget',
  component: () => import(/*webpackChunkName: "forget"*/"@/views/user/Forget.vue")
}]
