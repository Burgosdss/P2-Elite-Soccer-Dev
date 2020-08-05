const Customer = require('../models/customer');

module.exports = {
    index,
    addPost,
    delPost
};

function index(req, res) {
    Customer.find({}, function(err, customers) {
      res.render('customers/index', { 
        customers,
        user: req.user });
    });
  }
  
  function addPost(req, res) {
   req.user.facts.push(req.body);
   req.user.save(function(err){
     res.redirect('/customers')
   });
  }
  
  
  function delPost(req, res) {
  
  }