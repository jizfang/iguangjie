import Mock from 'mockjs'

Mock.mock('/api/user/login',{
    "status": 0,
    "data": {
        "id|10001-11000": 0,
        "username": "@cname(2,4)",
        "email": "@email",
        //"phone|1": ['13531544954', '13632250649', '15820292420', '15999905612'],
        "role": 0,
        "createTime": /1[1-9]0\d{10}/,
        "updateTime": /1[1-9]0\d{10}/,
        "phone|1": /^1[38567][1-9]\d{8}$/ //用正则匹配1开头的11位数字的手机号
    }
})