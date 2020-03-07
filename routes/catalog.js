const express = require('express');
const router = express.Router();

// 导入控制器模块
const book_controller = require('../controllers/bookController');
const author_controller = require('../controllers/authorController');
const genre_controller = require('../controllers/genreController');
const bookinstance_controller = require('../controllers/bookinstanceController');

/// 藏书路由 ///

// GET 获取藏书编目主页
router.get('/', book_controller.index);

// GET 请求添加新的藏书。注意此项必须位于显示藏书的路由（使用了 id）之前。
router.get('/book/create', book_controller.book_create_get);

// POST 请求添加新的藏书
router.post('/book/create', book_controller.book_create_post);

// GET 请求删除藏书
router.get('/book/:id/delete', book_controller.book_delete_get);

// POST 请求删除藏书
router.post('/book/:id/delete', book_controller.book_delete_post);

// GET 请求更新藏书
router.get('/book/:id/update', book_controller.book_update_get);

// POST 请求更新藏书
router.post('/book/:id/update', book_controller.book_update_post);

// GET 请求藏书
router.get('/book/:id', book_controller.book_detail);

// GET 请求完整藏书列表
router.get('/books', book_controller.book_list);

/// 作者路由 ///

// GET 请求添加新的作者。注意此项必须位于显示作者的路由（使用了 id）之前。
router.get('/author/create', author_controller.author_create_get);

// POST 请求添加新的作者
router.post('/author/create', author_controller.author_create_post);

// GET 请求删除作者
router.get('/author/:id/delete', author_controller.author_delete_get);

// POST 请求删除作者
router.post('/author/:id/delete', author_controller.author_delete_post);

// GET 请求更新作者
router.get('/author/:id/update', author_controller.author_update_get);

// POST 请求更新作者
router.post('/author/:id/update', author_controller.author_update_post);

// GET 请求作者
router.get('/author/:id', author_controller.author_detail);

// GET 请求完整作者列表
router.get('/authors', author_controller.author_list);

/// 图书种类路由 ///

// GET 请求添加新的图书种类。注意此项必须位于显示图书种类的路由（使用了 id）之前。
router.get('/genre/create', genre_controller.genre_create_get);

// POST 请求添加新的图书种类
router.post('/genre/create', genre_controller.genre_create_post);

// GET 请求删除图书种类
router.get('/genre/:id/delete', genre_controller.genre_delete_get);

// POST 请求删除图书种类
router.post('/genre/:id/delete', genre_controller.genre_delete_post);

// GET 请求更新图书种类
router.get('/genre/:id/update', genre_controller.genre_update_get);

// POST 请求更新图书种类
router.post('/genre/:id/update', genre_controller.genre_update_post);

// GET 请求图书种类
router.get('/genre/:id', genre_controller.genre_detail);

// GET 请求完整图书种类列表
router.get('/genres', genre_controller.genre_list);

/// 藏书副本路由 ///

// GET 请求添加新的藏书副本。注意此项必须位于显示藏书副本的路由（使用了 id）之前。
router.get('/bookinstance/create', bookinstance_controller.bookinstance_create_get);

// POST 请求添加新的藏书副本
router.post('/bookinstance/create', bookinstance_controller.bookinstance_create_post);

// GET 请求删除藏书副本
router.get('/bookinstance/:id/delete', bookinstance_controller.bookinstance_delete_get);

// POST 请求删除藏书副本
router.post('/bookinstance/:id/delete', bookinstance_controller.bookinstance_delete_post);

// GET 请求更新藏书副本
router.get('/bookinstance/:id/update', bookinstance_controller.bookinstance_update_get);

// POST 请求更新藏书副本
router.post('/bookinstance/:id/update', bookinstance_controller.bookinstance_update_post);

// GET 请求藏书副本
router.get('/bookinstance/:id', bookinstance_controller.bookinstance_detail);

// GET 请求完整藏书副本列表
router.get('/bookinstances', bookinstance_controller.bookinstance_list);


module.exports = router;