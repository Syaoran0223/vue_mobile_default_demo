// 正式
// const log = function() {}
// const error = function() {}
// const line = function() {}

// 测试
const log = console.log.bind(console, '>>>')
const error = console.error.bind(console, "AJAX Error ->")
const line = console.error.bind(console, '------------------------ AJAX BUG------------------------')



