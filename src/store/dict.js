import Vue from "vue";

const dict = {
  state:{
  
  },
  mutations:{
    SET_DICT(state,payload){
     for(const k in payload){
       Vue.set(state,k,payload[k])
     }
    }
  },
  namespaced:true
}

export default dict

