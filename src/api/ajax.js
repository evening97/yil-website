import axios from "axios";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'
//创建实例
const service = axios.create({
    baseURL: "http://website.bluej.cn/api", // 当前项目公共接口 
    // baseURL: "/api", // 当前项目公共接口 
    timeout: 2000, //当ajax请求超过设置的这个事件就会报错
});

//  请求拦截
service.interceptors.request.use((config) => {
    NProgress.start(); //进度条开始
    return config;
});

// 响应拦截
service.interceptors.response.use(
    (response) => {
        NProgress.done();//停止进度条
        return response.data;//返回数据
    },
    (error) => {
        NProgress.done();//停止进度条
        alert('发送请求失败'+error.message||'未知错误')
        return new Promise(()=>{})//返回pending状态的promise 代表中断promise链 
    }
);
export default service //暴露接口
