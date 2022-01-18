import Vue from 'vue'
import Vuex from 'vuex'
//引入小的模块
import home from './home'
import about from './about'
import xiaoMi from './xiaoMi'
import product from './product'
import customer from './customer'
import programme from './programme'

Vue.use(Vuex)
const state = {
  //存储数据
}
const mutations = {
  //修改数据
}
const actions = {
  //异步请求
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules:{
    home,about,xiaoMi,product,customer,programme,
  },
  getters :{
    // 公共数据
  }
})