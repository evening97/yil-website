import { requestHomeImg,reqBannerList } from '../api/index'
const state = {
    //存储数据
    homeBannerImg:[],
    homeCaseImg:[],
    homeCase2Img:[],
    bannerList:[]
}
const mutations = {
    //修改数据
    RECEIVE_HOMEBANNERIMG(state,homeBannerImg){
        state.homeBannerImg = homeBannerImg.Carousels.slice(0,4)
        state.homeCaseImg = homeBannerImg.Carousels.slice(4,7)
        state.homeCase2Img = homeBannerImg.Carousels.slice(7,10)
    },
    // RECEIVE_BANNERLIST(state,bannerList){
    //     bannerList.forEach( element => {
    //         element.img = new URL(`${element.img}`, import.meta.url).href
    //     });
    //     state.bannerList = bannerList
    // }
}
const actions = {
    //异步请求
    async getHomeBannerImg({commit}){
        let result = await requestHomeImg()
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