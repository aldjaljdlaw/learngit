/*
* 先导包
* 暴露模块*/


/*此处导入的Router1是相当于从vue-router库内new的一个router路由器，此Router1为new出来的一个router*/

import Vue from 'vue';
import Router1 from "vue-router";
import Login from "../views/Login";
import Main from "../views/Main";
import MemberLevel from "../views/Member/MemberLevel";
import MemberList from "../views/Member/MemberList";
/*引入404页面*/
import notFound from "../views/notFound";

Vue.use(Router1);

export default new Router1({
  /*使用history模式，原哈希模式网址上有#号，是单页面不跳转*/
  mode:"history",
  routes:[{
    path: '/login',
    name: 'Login',
    component: Login
  },
    {
    //路由跳转的路径
    path:'/Main',
    //路由名称
    name:'Main',
    //路由跳转组件
    component:Main,
      children:[{
    //路由跳转的路径
    path:'/list',
    //路由名称
    name:'List',
    //路由跳转组件
    component:MemberList
  },{
    //路由跳转的路径
    path:'/level',
    //路由名称
    name:'Level',
    //路由跳转组件
    component:MemberLevel
  },{
      /*回到首页*/
      path:'/gologin',
        /*通过redirect重定向至其他组件*/
      redirect:'/login'
      },{
      path:'*',
      component:notFound
      }
      ]
}]})

