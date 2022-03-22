<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',
  //由于这是在vue实例中了，可以调用钩子函数mounted添加监听事件：相当于刷新时判断 将state存入Storage中  ==>下一步，前往store中的state属性进行判断是否存取state
  mounted() {
    window.addEventListener('unload',this.saveState)
  },
  methods:{
    saveState(){
      //由于sessionStorage只能存字符串，所以要将this.$store.state转化为json
      sessionStorage.setItem('state',JSON.stringify(this.$store.state))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
