import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/login',
      component:()=>import('../pages/login')
    },
    {
      path:'/index',
      component:()=>import('../pages/index'),
      children:[
        {
          path:'/menu',
          component:()=>import('../views/menu/index'),
          meta:{
            name:'菜单列表'
          }
        },
        {
          path:'/role',
          component:()=>import('../views/role/index'),
          meta:{
            name:'角色列表'
          }
        },
        {
          path:'/user',
          component:()=>import('../views/user/index'),
          meta:{
            name:'管理员列表'
          }
        },
      ]
    },
    {
      path:'*',
      redirect:'/index'
    }
  ]
})
