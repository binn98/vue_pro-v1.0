 const getters = { //针对state里面的变量进行加工
  nameInfo(state) {
    return "姓名:" + state.name;
  },
  fullInfo(state, getters) {
    return getters.nameInfo + "年龄:" + state.age;
  }
};
export default getters