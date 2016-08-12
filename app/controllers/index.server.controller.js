module.exports.render = function(req, res) {
    var test = '2';
    res.render('index', {
      title: 'Index'
    });
};
