/*
* VueX操作对象
*   引入使用vue及vuex，并配置vuex的几个属性,随后将属性暴露出去
*   在页面中使用vuex的各个属性方法。
*   注意：由于vue是单页面应用，而vuex是响应式的状态存储模式。单页面应用的数据是存储在页面中的，一旦刷新数据将会恢复至初识状态（即登录过后刷新将会导致数据丢失，导致需要重新登录）。
*     解决办法：添加事件监听页面是否刷新，若刷新则将state存储到sessionStorage内，页面打开后，判断state是否存在sessionStorage中，若存在则直接将内部的state取出；
*             若不存在，则判定为是第一次登录，将在vuex中重新定义初始值。
*     具体操作流程：前往App.vue中添加saveState方法用以存储state值，并设置钩子函数mounted使得每次刷新页面时都可以监听，添加监听事件
*
*    总结：VueX是一个响应式存储页面数据的工具，其中state为主要放置数据的数据库，getters属性存放获取state中各种属性的对应方法，mutations属性存放修改state中各种属性的方法，由于mutations的同步性，
*         必须添加了actions作为mutation的异步方法提高效率。   在页面Main.vue中可以通过调用store中的各种方法来存取数据，且由于可能出现数据丢失的情况，将state存入sessionStorage中作为避免方法。
*/

import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex);

/*全局state对象，用于存储所有组件的公共数据，可以类比作数据库-----固定写法*/
//三目表达式：若state在sessionStorage中存在值，则将state取出，否则初始化一个新的state
const state=sessionStorage.getItem('state')?JSON.parse(sessionStorage.getItem(state)):{
  user:{
    name:''
  }
};


//监听state值的最新状态（计算属性，相当于缓存，能够提高性能）,相当于java中的get方法(取值）
const getters={
  //获取对象
  getUser(state){
    return state.user;
  }
};


//唯一一个可以修改state值的方法(这是个同步执行的方法，也意味着它会阻塞）
const mutations={
  updateUser(state,user){
    state.user =user;
  }
};


//异步执行mutations方法
const actions={
  asyncUpdateUser(context,user){
    context.commit("updateUser",user);
  }
}


export default new Vuex.Store
{
    state,
    getters,
    mutations,
    actions
}
