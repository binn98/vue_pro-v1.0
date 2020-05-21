<template>
  <div class="home">
    <extend :datalist='txt'/>
    <input type="text" v-model="txt">
  </div>
</template>

<script>
export default {
  data(){
    return{
      txt:''
    }
  }
}
</script>

<style>

</style>