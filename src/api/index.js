import request from './ajax'
import mockAjax from './mockAjax'
export const login = async () => {
        const res = await request({
        url: '/admin/login',
        method: 'post',
        data: {
            "phone": "17665066963",
            "password": "123456"
        },
    })
    sessionStorage.setItem('token', JSON.stringify(res.data.token))
    return res.data.token
}
let token;
export const requestHomeImg = async () => {
    if (sessionStorage.getItem("token")) {
        token= JSON.parse(sessionStorage.getItem("token"))
    }else{

        token = await login()
    }
    return request(
        {
            url:'carouselGroup/get',
            method:'get',
            headers:{
                'x-token':token,
            },
            params:{
                carouselGroupId:502
            }
            
        }
    )
}
export const requestCaseImg = async () => {
    if (sessionStorage.getItem("token")) {
        token= JSON.parse(sessionStorage.getItem("token"))
    }else{

        token = await login()
    }
    return request(
        {
            url:'carouselGroup/get',
            method:'get',
            headers:{
                'x-token':token,
            },
            params:{
                carouselGroupId:505
            }
            
        }
    )
}
export const requestCustomerImg = async () => {
    if (sessionStorage.getItem("token")) {
        token= JSON.parse(sessionStorage.getItem("token"))
    }else{

        token = await login()
    }
    return request(
        {
            url:'carouselGroup/get',
            method:'get',
            headers:{
                'x-token':token,
            },
            params:{
                carouselGroupId:508
            }
            
        }
    )
}
export const requestProgrammeImg = async () => {
    if (sessionStorage.getItem("token")) {
        token= JSON.parse(sessionStorage.getItem("token"))
    }else{

        token = await login()
    }
    return request(
        {
            url:'carouselGroup/get',
            method:'get',
            headers:{
                'x-token':token,
            },
            params:{
                carouselGroupId:504
            }
            
        }
    )
}
export const reqBannerList = () => {
    return mockAjax({
        url:'/banner',
        method:'get'
    })
}
// mock 数据
export const reqXiaoMiData = () => {
    return mockAjax({
        url:'/xiaoMi',
        method:'get'
    })
}