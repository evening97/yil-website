import Mock from 'mockjs'
import banner from './banner.json'
import xiaoMi from './xiaoMi.json'

//第一个参数代表请求的路径 
//第二个参数代表返回的数据
Mock.mock('/mock/banner',{code:200,data:banner})
Mock.mock('/mock/xiaoMi',{code:200,data:xiaoMi})