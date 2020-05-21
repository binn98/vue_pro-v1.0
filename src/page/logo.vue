<template>
  <div class="logo">
    这是登录页
    <div class="btn">
      这是登录按钮
    </div>
    <extend @pop="check"/>
  </div>
</template>

<script>

export default {
 methods:{
   check(e){
     console.log(e);
   }
 }
}
</script>

<style lang="less" scoped>
.logo{
  background-color: aqua;
  .btn{
    color: red;
  }
}
</style>