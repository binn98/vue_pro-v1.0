const state = {
  name: "vuex",
  age: "18",
  id:sessionStorage.getItem('id')||'',
  pwd:sessionStorage.getItem('pwd')||''
}
export default state