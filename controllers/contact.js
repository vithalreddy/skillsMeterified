var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: "postmaster@sandbox67c118365e564798a8864434e4b2a3cb.mailgun.org",
    pass: "ed49d942fd9e6c11208ee3aacb29df9d"
  }
});

/**
 * GET /contact
 */
exports.contactGet = function(req, res) {
  res.render('contact', {
    title: 'Contact'
  });
};

/**
 * POST /contact
 */
exports.contactPost = function(req, res) {
  req.assert('name', 'Name cannot be blank').notEmpty();
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('email', 'Email cannot be blank').notEmpty();
  req.assert('message', 'Message cannot be blank').notEmpty();
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  var errors = req.validationErrors();

  if (errors) {
    return res.status(400).send(errors);
  }

  var mailOptions = {
    from: req.body.name + ' ' + '<'+ req.body.email + '>',
    to: 'vmreddyvmb@gmail.com',
    subject: '✔ Contact Form | skillsMeterified',
    text: req.body.message
  };

  transporter.sendMail(mailOptions, function(err) {
    res.send({ msg: 'Thank you! Your feedback has been submitted.' });
  });
};
