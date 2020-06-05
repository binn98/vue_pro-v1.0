<template>
  <div class="home">
    <extend :datalist='txt'/>
    <input type="text" placeholder="姓名" v-model="txt">
    <input type="text" placeholder="年龄" v-model="age">
    <div class="vuex">{{$store.state.name}}</div>
    <div class="getters">{{$store.getters.nameInfo}}</div>
    <div class="getters">{{$store.getters.fullInfo}}</div>
    <div class="actions" @click="action">异步操作按钮</div>
    <div class="out">退出</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      txt:'',
      age:''
    }
  },
  watch:{
    txt(){
      this.$store.commit('editName',this.txt)
    }
  },
  methods:{
    action(){
      this.$store.dispatch('aEdit',this.age).then(res=>{console.log(res);})
      this.$store.commit('del_Any_STATE','name')
      this.$store.commit('SET_ANY_STATE',{key:'name',value:'vue'})
    }
  },
  mounted(){

  }
}
</script>

<style>

</style>