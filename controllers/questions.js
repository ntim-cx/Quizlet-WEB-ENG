exports.index = function(req, res, next) {
    res.render('addQuestion', { title: 'Add Question' });
}

exports.addAction  = function(req, res, next) {
    res.render('login', { title: 'Login' });
}