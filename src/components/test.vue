<template>
  <div class="test">
    less语法是否生效
    <div class="true">123</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  }
};
</script>
<style lang="less">
  .test{
    background-color: aqua;
    .true{
      color: #999999;
    }
  }
</style>