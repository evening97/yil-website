
import { requestCaseImg } from '../api'
const state = {
    //存储数据
    productTopImg:[],
    productImg:[],
}
const mutations = {
    //修改数据
    RECEIVE_PRODUCTIMG(state,Img){
        state. productTopImg = Img.Carousels[0]
        Img.Carousels.slice(1,7).forEach(element => {
            state.productImg.push(element.url)
        });
        // state.homeCaseImg = homeBannerImg.Carousels.slice(4,7)
        // state.homeCase2Img = homeBannerImg.Carousels.slice(7,10)
    },
}
const actions = {
    //异步请求
    async getProductImg({commit}){
        let result = await requestCaseImg()
        commit('RECEIVE_PRODUCTIMG',result.data)
    },
}
const getters = {

}
export default {
    state,mutations,actions,getters
}