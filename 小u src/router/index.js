import Vue from 'vue'
import Router from 'vue-router'
import { InputNumber } from 'element-ui'

Vue.use(Router)
// 一级路由
// 二级路由

export default new Router({
  routes: [
      {
        path:'/index',
        component:()=>import('../components/index'),
        children:[
          // 定义二级路由
          {
            path:'/cat',
            component:()=>import('../components/shop/cat')
          },
          {
            path:'/home',
            component:()=>import('../components/shop/home')
          },
          {
            path:'/mine',
            component:()=>import('../components/shop/mine')
          },
          {
            path:'/order',
            component:()=>import('../components/shop/order_form')
          },
          {
            path:'/list',
            component:()=>import('../components/shop/list')
          },
          {
            path:'/two',
            component:()=>import('../components/shop/two')
          },
          {
            path:'/three',
            component:()=>import('../components/shop/three')
          },
          {
            path:'/fove',
            component:()=>import('../components/shop/fove')
          },
          {
            path:'',
            redirect:'/home'
          }
        ]
      },
      {
        path:'/shoplist',
        component:()=>import('../components/shoplist')
      },
      // 重新定义路由
      {
        path:'*',
        redirect:'/index'
      },
      {
        path:'/login',
        component:()=>import('../components/login')
      },
      {
        path:'/first',
        component:()=>import('../components/first_list')
      },
      {
        path:'/detail',
        component:()=>import('../components/detail')
      }
      
  ]
})