const express = require('express');
const router = express.Router();
const teamsCtrl = require('../controllers/teams');

router.get('/', teamsCtrl.index);
router.get('/new', teamsCtrl.new);
router.get('/:id', teamsCtrl.show);
router.post('/', teamsCtrl.create);
router.delete('/:id/:idp', teamsCtrl.removePlayer);


module.exports = router;