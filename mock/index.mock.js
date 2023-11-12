const { mock } = require('mockjs')
const test1Data = mock({
    'userList|1-10': [{
        'id|+1': 1,
        'name': '@cname',
        'avatar': `@image(100x100,#00405d,#FFF,png)`
    }]
})
module.exports = [
    {
        pattern: "/api/test1",
        method: "GET",
        data: JSON.stringify(test1Data)
    }
]