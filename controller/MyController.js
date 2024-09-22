const methods = {
    index: (req, res) => {
        res.render('index');
    },
    about: (req, res) => {
        res.render('about');
    },
    blog: (req, res) => {
        res.render('blog');
    },
    cart: (req, res) => {
        res.render('cart');
    },
    checkout: (req, res) => {
        res.render('checkout');
    },
    contacts: (req, res) => {
        res.render('contacts');
    },
    shop: (req, res) => {
        res.render('shop');
    },
    singlePost: (req, res) => {
        res.render('single_post');
    },
    singleProduct: (req, res) => {
        res.render('single_product')
    }
}

module.exports = methods;