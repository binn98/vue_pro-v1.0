const actions = { //异步操作,context上下文相当于this
  aEdit(context, payload) {
    // setTimeout(() => {
    //   context.commit("edit", payload);
    //   console.log(context);
    // }, 2000);
    return new Promise((resolve, reject) => {
      if(!payload){
        payload = 18
      }
        context.commit("editAge", payload);
        resolve(payload);
    });
  }
}
export default actions