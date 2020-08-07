const router = require('express').Router();
const customersCtrl = require('../controllers/customers');

// GET /
router.get('/customers', customersCtrl.index);

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
router.post('/facts', isLoggedIn, customersCtrl.addPost);

// DELETE /facts/:id
router.delete('/facts/:id', isLoggedIn, customersCtrl.delPost);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
        res.redirect('/');
}

module.exports = router;


