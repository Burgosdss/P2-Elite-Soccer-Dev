const express = require('express');
const router = express.Router();
const playersCtrl = require('../controllers/players');

router.get('/players/new', playersCtrl.new);
router.post('/players', isLoggedIn, playersCtrl.create);
router.post('/teams/:id/players', isLoggedIn, playersCtrl.addToRoster);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
        res.redirect('/auth/google');
}

module.exports = router;

