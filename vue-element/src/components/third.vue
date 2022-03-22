<template>
  <div>
    <button id="1" color="red" @click="exchange">点我交换按钮的背景颜色</button>
    <button id="2" color="yellow" @click="exchange">点我交换按钮的背景颜色</button>
  </div>
</template>

<script>
export default {
  name: "third",
  methods:{
    exchange(){
      let temp =document.getElementById("color").getAttribute("color")
    }
  }
}
</script>

<style scoped>

</style>
