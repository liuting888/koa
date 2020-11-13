const router = require('koa-router')();
const controller = require('../controller/c-wx')

// 首页
router.get('/', controller.getRedirectPosts)
// 查询
router.post('/wx/query', controller.getWxQuery)
// 新增
router.post('/wx/add', controller.postWxAdd)
// 编辑
router.post('/wx/edit', controller.postWxEdit)
// 删除
router.post('/wx/del', controller.postWxDel)

// // 单篇文章页
// router.get('/posts/:postId', controller.getSinglePosts)


module.exports = router