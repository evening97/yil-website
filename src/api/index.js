import request from './ajax'
import request_2 from './ajax_2'
import mockAjax from './mockAjax'
export const login = async () => {
        const res = await request({
        url: '/admin/login',
        method: 'post',
        data: {
            "phone": "13000000000",
            "password": "123456"
        },
    })
    sessionStorage.setItem('token', JSON.stringify(res.data.token))
    return res.data.token
}
let token;
export const requestImg = async () => {
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
// requestImg()
export const text = () => {
    return request_2({
        url:'',
        method:'post',
        data:{
            ret:'json'
        },
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
}
// text()
export const reqBannerList = () => {
    return mockAjax({
        url:'/banner',
        method:'get'
    })
}
export const reqXiaoMiData = () => {
    return mockAjax({
        url:'/xiaoMi',
        method:'get'
    })
}