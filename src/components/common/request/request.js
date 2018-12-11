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
export function request_get(url, data) {
    return $.ajax({
        url,
        data,
        type: 'get',
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
    return $.ajax({
        url,
        data,
        type: 'post',
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