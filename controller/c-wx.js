const userModel = require('../lib/mysql.js')
/**
 * 首页提示
 */
exports.getRedirectPosts = async ctx => {
    // ctx.redirect('/posts')
    console.log(123);
    ctx.body = '只是一个简单的WEB服务器';
}
/**
 * 查询
 */
exports.getWxQuery = async ctx => {
    console.log(232);
    // ctx.redirect('/posts')
    await userModel.wxQuery().then(result => {
        ctx.body = result
    }).catch(() => {
        ctx.body = 'error'
    })
}
/**
 * 新增
 */
exports.postWxAdd = async ctx => {
    let {
        name,
        url,
        alexa,
        country,
        age
    } = {
        ...ctx.request.body
    };
    await userModel.wxAdd([name, url, alexa, country, age])
        .then(() => {
            ctx.body = {
                code: 200,
                message: '新增成功'
            }
        }).catch(() => {
            ctx.body = {
                code: 500,
                message: '新增失败'
            }
        })
}
/**
 * 修改
 */
exports.postWxEdit = async ctx => {
    let {
        id,
        name,
        url
    } = {
        ...ctx.request.body
    };
    await userModel.wxEdit([name, url, id])
        .then(() => {
            ctx.body = {
                code: 200,
                message: '修改成功'
            }
        }).catch(() => {
            ctx.body = {
                code: 500,
                message: '修改失败'
            }
        })
}
/**
 * 删除
 */
exports.postWxDel = async ctx => {
    await userModel.wxDel(ctx.request.body.id)
        .then(() => {
            ctx.body = {
                code: 200,
                message: '删除成功'
            }
        }).catch(() => {
            ctx.body = {
                code: 500,
                message: '删除失败'
            }
        })
}
