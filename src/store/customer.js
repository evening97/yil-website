
import { requestCustomerImg } from '../api'
const state = {
    //存储数据
    customerImg:[],
}
const mutations = {
    //修改数据
    RECEIVE_CUSTOMERIMG(state,customerImg){
        state.customerImg = customerImg.Carousels
    },
}
const actions = {
    //异步请求
    async getCustomerImg({commit}){
        let result = await requestCustomerImg()
        commit('RECEIVE_CUSTOMERIMG',result.data)
    },
}
const getters = {

}
export default {
    state,mutations,actions,getters
}