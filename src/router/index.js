import { createRouter, createWebHashHistory } from 'vue-router'
const Home=()=>import('../views/home/Home')
const Category=()=>import('@/views/category/Category')
const Profile=()=>import('@/views/profile/Profile')
const ShopCart=()=>import('@/views/shopCart/ShopCart')

//嵌套路由：引入三个子路由,home的子路由
const Pop=()=>import('../components/content/homeClassify/Pop')
const Sell=()=>import('../components/content/homeClassify/Sell')
const New=()=>import('../components/content/homeClassify/New')

//分类页的子路由
const Poping=()=>import('../components/content/categoryClassify/Poping')
const Shangyi=()=>import('../components/content/categoryClassify/Shangyi')
const Qunzi=()=>import('../components/content/categoryClassify/Qunzi')
const Kuzi=()=>import('../components/content/categoryClassify/Kuzi')
const Neiyi=()=>import('../components/content/categoryClassify/Neiyi')

const routes = [
  {path:'',redirect:'/home/pop'},
  {path:'/home',
    name:'Home',
    component:Home,
    children:[//配置子路由
      {
        path:'',
        redirect:'/home/pop'
      },
      {
        path:'pop',
        component:Pop
      },
      {
        path:'sell',
        component:Sell
      },
      {
        path:'new',
        component:New
      }
    ]
  },
  {path:'/category',
    component:Category,
    children:[//配置子路由
      {
        path:'',
        redirect:'/category/poping'
      },
      {
        path:'poping',
        component:Poping
      },
      {
        path:'shangyi',
        component:Shangyi
      },
      {
        path:'qunzi',
        component:Qunzi
      },
      {
        path:'kuzi',
        component:Kuzi
      },
      {
        path: 'neiyi',
        component:Neiyi
      }
    ]
  },
  {path:'/profile',component:Profile},
  {path:'/shopCart',component:ShopCart},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
