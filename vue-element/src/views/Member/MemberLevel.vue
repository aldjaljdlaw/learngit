<template>
<div>
  会员等级  ID={{id}}
</div>
</template>

<script>
export default {
  props:['id'],
  name: "MemberLevel",
  /*路由钩子函数：beforeRouterEnter进入路由前调用,beforeRouterLeave离开路由前调用*/
  beforeRouteEnter:(to,from,next) => {
    console.log("进入会员等级页面");
    /*回调*/
    next(vm => {
      vm.getData();
    });
  },
  beforeRouteLeave:(to,from,next) => {
    console.log("离开会员等级页面");
    next();
  },
  methods:{
    getData:function (){
      this.axios({
        method:'get',
        url:'http://localhost:8080/data.jason',
      }).then(function (repos){
        console.log(repos);
      }).catch(function (error){
        console.log(error);
      })
    }
  }
}
</script>

<style scoped>

</style>
