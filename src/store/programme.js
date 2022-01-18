
import { requestProgrammeImg } from '../api'
const state = {
    //存储数据
    ProgrammeTopImg:[],
    ProgrammeMiddleImg:[],
    ProgrammeBottomImg:[]
}
const mutations = {
    //修改数据
    RECEIVE_PROGRAMME(state,Img){
        Img.Carousels.slice(0,10).forEach(element => {
            state.ProgrammeTopImg.push(element.url)
        });
        Img.Carousels.slice(10,13).forEach(element => {
            state.ProgrammeMiddleImg.push(element.url)
        });
        Img.Carousels.slice(13,22).forEach(element => {
            state.ProgrammeBottomImg.push(element.url)
        });
        [state.ProgrammeBottomImg[4],state.ProgrammeBottomImg[8]] = [state.ProgrammeBottomImg[8],state.ProgrammeBottomImg[4]]
    },
}
const actions = {
    //异步请求
    async getProgrammeImg({commit}){
        let result = await requestProgrammeImg()
        commit('RECEIVE_PROGRAMME',result.data)
    },
}
const getters = {

}
export default {
    state,mutations,actions,getters
}