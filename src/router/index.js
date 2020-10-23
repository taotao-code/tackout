// 路由器对象模块   
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Oder from '../pages/Oder/Oder.vue'
import Profile from '../pages/Profile/Profile.vue'
import Seach from '../pages/Seach/Seach.vue'
import login from '../pages/Login/Login.vue'


//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    // linkActiveClass:"aaa",//需拓展
    //所有路由
    routes:[
        {
            path:'/msite',
            component:Msite,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/oder',
            component:Oder,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/seach',
            component:Seach,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/',
            redirect:'/msite',
            
        },
    ]
})