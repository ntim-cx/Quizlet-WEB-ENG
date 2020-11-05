
exports.index = function(req, res, next) {
    res.render('login', { title: 'Login' });
}
exports.signup = function(req, res, next) {
    res.render('register', { title: 'Register' });
}

exports.submit_login = function(req, res, next){
    console.log('email', req.body.inpEmail);
    console.log('password',req.body.inpPassword);
    res.redirect('/users')
}

exports.submit_register = function(req, res, next){
    console.log('email', req.body.inpEmail);
    console.log('password',req.body.inpPassword);
    res.redirect('/')
}