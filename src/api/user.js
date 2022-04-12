// 用户相关的请求模块
import request from "./request"
// 用户登录
export const login = data => {
    return request({
        Method: POST,
        url: "/app/v1_0/authorizations",
        data
    })
}
export const getCode = mobile => {
    return request({
        Method: GET,
        url: `/app/v1_0/sms/codes/${mobile}`,
    })
}