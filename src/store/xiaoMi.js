import Vue from 'vue'
import Vuex from 'vuex'
import {
    reqXiaoMiData
} from '../api'
Vue.use(Vuex)
const state = {
    //存储数据
    xiaoMiData: []
}
const mutations = {
    //修改数据
    RECEIVE_XIAOMIDATA(state, xiaoMiData) {
        /**
         *
         * @param {*} data 数据
         * @param {*} value 要查询的值
         */
        function findData(data, value) {
            if (!data) { //数据为空 直接退出
                return
            }
            //数据类型为数组
            if (Object.prototype.toString.call(data) == '[object Array]') {
                for (let i = 0; i < data.length; i++) {
                    let item = data[i]
                    if (item[`${value}`]) {
                        data[i][`${value}`] = new URL(`${data[i][`${value}`]}`,
                            import.meta.url).href
                    } else {
                        for (const key in item) {
                            if (Object.hasOwnProperty.call(item, key)) {
                                if (Object.prototype.toString.call(item[key]) == `[object Object]` || Object.prototype.toString.call(item[key]) == '[object Array]') {
                                    findData(item[key], value)
                                }
                            }
                        }
                    }
                }
            } else if (Object.prototype.toString.call(data) == `[object Object]`) {
                if (data[`${value}`]) {
                    data[`${value}`] = new URL(`${data[`${value}`]}`,
                        import.meta.url).href
                } else {
                    for (const key in data) {
                        if (Object.hasOwnProperty.call(data, key)) {
                            if ((Object.prototype.toString.call(data[key]) == `[object Object]` || Object.prototype.toString.call(data[key]) == '[object Array]')) {
                                findData(data[key], value)
                            }
                        }
                    }
                }
            }
        }
        findData(xiaoMiData, "img")
        state.xiaoMiData = xiaoMiData
    }
}
const actions = {
    //异步请求
    async getXiaoMiData({
        commit
    }) {
        let result = await reqXiaoMiData();
        if (result.code == 200) {
            commit('RECEIVE_XIAOMIDATA', result.data)
        }
    }
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}