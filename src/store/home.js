import Vue from 'vue'
import Vuex from 'vuex'
import { requestImg,reqBannerList } from '../api'
Vue.use(Vuex)
const state = {
    //存储数据
    homeBannerImg:[],
    bannerList:[]
}
const mutations = {
    //修改数据
    RECEIVE_HOMEBANNERIMG(state,homeBannerImg){
        state.homeBannerImg = homeBannerImg
    },
    RECEIVE_BANNERLIST(state,bannerList){
        bannerList.forEach( element => {
            element.img = new URL(`${element.img}`, import.meta.url).href
        });
        state.bannerList = bannerList
    }
}
const actions = {
    //异步请求
    async getHomeBannerImg({commit}){
        let result = await requestImg()
        commit('RECEIVE_HOMEBANNERIMG',result.data)
    },
    async getBannerList({commit}){
        let result = await reqBannerList();
        if (result.code == 200) {
            commit('RECEIVE_BANNERLIST',result.data)
        }
    }
}
const getters = {

}
export default {
    state,mutations,actions,getters
}