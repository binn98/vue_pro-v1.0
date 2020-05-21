<template>
  <div @click="tip" class="qunju">我是全局组件{{title}}{{datalist}}</div>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default(){
        return '没有传值'
      }
    },
    datalist:{
      type:String,
      default(){
        return '在home';
      }
    }
  },
  data(){
    return{
      message:'传给父组件',
      list:[{a:1,b:2},{c:3,d:4}]
    }
  },
  methods:{
    tip(){
      // alert('组件')
      this.$emit('pop',this.datalist)
      // console.log(this.list);
    }
  }
}
</script>

<style>

</style>