<template>
  <div class="logo">
    <img src="../assets/logo.png" />
    <div class="id">
      <label>账号: </label>
      <el-input placeholder="请输入账号" v-model= "id" style="width:80%">
        <i slot="suffix" class="el-input__icon el-icon-circle-close" @click= "id= ''"></i>
      </el-input>
    </div>
    <div class="pwd">
      <label>密码: </label>
      <el-input placeholder="请输入密码" v-model= "pwd" style="width:80%" show-password></el-input>
    </div>
    <div class="btn"><el-button style="width:60%;margin-left:20px" type="success" :loading= "is_load" @click="btn">登录</el-button></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id:'',
      pwd:'',
      is_load:false
    }
  },
  methods: {
    check(e) {
      console.log(e);
    },
    btn(){
      let num = Math.round(Math.random());
      //console.log(num);
      this.is_load = true;
      sessionStorage.setItem('id',this.id)
      sessionStorage.setItem('pwd',this.pwd)
      setTimeout(() => {
        if(num == 1){
          this.$message({
           message: '登录成功',
           type: 'success'
         });
        }else{
          this.$message.error('密码错误');
        }
        this.is_load = false
      }, 1500);
    }
  }
};
</script>

<style lang="less" scoped>
.logo {
  width: 400px;
  height: 500px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  padding-top:50px ;
  box-sizing: border-box;
  background-color:burlywood;
  border-radius: 20px;
}
.id{
  width: 300px;
  margin: 0 auto;
  margin-bottom: 20px;
}
.el-icon-circle-close:hover{
  color: red;
  cursor: pointer;
}
.pwd{
  width: 300px;
  margin: 0 auto;
  margin-bottom: 20px;
}
</style>
