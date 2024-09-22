const express = require('express');
const router = express.Router();
const controller = require('../controller/MyController');

router.get('/', controller.index);
router.get('/shop', controller.shop);
router.get('/cart', controller.cart);
router.get('/about', controller.about);
router.get('/blog', controller.blog);
router.get('/contacts', controller.contacts);
router.get('/checkout', controller.checkout);
router.get('/single-post', controller.singlePost);
router.get('/single-product', controller.singleProduct);

module.exports = router;