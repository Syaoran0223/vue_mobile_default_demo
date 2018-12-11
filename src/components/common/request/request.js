import { log, error, line } from '@/components/common/utils'
const errorTip = function(url, data, XMLHttpRequest, textStatus, errorThrown) {
    line()
    error('url: ', url)
    error('data: ', data)
    error('readyState: ', XMLHttpRequest.readyState);
    error('状态码: ', XMLHttpRequest.status);
    error('状态码信息: ', XMLHttpRequest.statusText);
    error('服务器响应文本: ', XMLHttpRequest.responseText);
    error('服务器返回状态: ', XMLHttpRequest.readyState);
    error('服务器抛出返回的错误信息: ', textStatus);
    line()
}
// 不携带 jwt 版本请求
export function request(method, url, data) {
    return $.ajax({
        url,
        data,
        type: method,
        beforeSend: function(XMLHttpRequest) {
            store.commit('globalModalCountAdd')
        },
        success: function(res, status, xhr) {
            store.commit('globalModalCountReduce')
            return res
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            store.commit('globalModalCountReduce')
            errorTip(url, data, XMLHttpRequest, textStatus, errorThrown)
        },
    })
}
export function request_post(url, data) {
    return request('post', url, data)
}
export function request_get(url, data) {
    return request('get', url, data)
}