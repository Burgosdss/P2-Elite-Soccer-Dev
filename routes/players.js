const express = require('express');
const router = express.Router();
const playersCtrl = require('../controllers/players');

router.get('/players/new', playersCtrl.new);
router.post('/players', playersCtrl.create);
router.post('/teams/:id/players', playersCtrl.addToRoster);
module.exports = router;

