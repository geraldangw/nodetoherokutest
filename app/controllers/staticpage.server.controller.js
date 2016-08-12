module.exports.renderHome = function(req, res) {
    res.render('static_pages/index', {
      title: 'Home'
    });
};

module.exports.renderAbout = function(req, res) {
    res.render('static_pages/about', {
      title: 'About'
    });
};

module.exports.renderContact = function(req, res) {
    res.render('static_pages/contact', {
      title: 'Contact'
    });
  };
