 import Vue from 'vue'
 //同步执行的方法
 const mutations = {
  editName(state, name) {
    state.name = name;
  },
  editAge(state, age) {
    state.age = age;
  },
  //删除state某个变量
  del_Any_STATE(state, del) {
    Vue.delete(state, del);
  },
  //添加state下的变量
  SET_ANY_STATE(state, set) {
    if (set.key && set.value) {
      Vue.set(state, set.key, set.value);
    } else {
      alert("你可能还没传值..");
    }
  }
};
export default mutations
