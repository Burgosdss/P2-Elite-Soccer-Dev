const express = require('express');
const router = express.Router();
const teamsCtrl = require('../controllers/teams');

router.get('/', teamsCtrl.index);
router.get('/new', isLoggedIn, teamsCtrl.new);
router.get('/:id', isLoggedIn, teamsCtrl.show);
router.post('/', isLoggedIn, teamsCtrl.create);
router.delete('/:id/:idp',isLoggedIn, teamsCtrl.removePlayer);
router.get('/:id/edit',isLoggedIn, teamsCtrl.edit);
router.put('/update/:id', isLoggedIn, teamsCtrl.updateTeam);



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
        res.redirect('/auth/google');
}
module.exports = router;
