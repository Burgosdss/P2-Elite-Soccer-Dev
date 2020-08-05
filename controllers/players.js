const Player = require('../models/player');
const Team = require('../models/team')

module.exports =  {
 new: newPlayer,
 create,
 addToRoster,
};

function addToRoster(req, res) {
    Team.findById(req.params.id, function(err, team){
        team.roster.push(req.body.playerId);
        team.save(function(err){
            res.redirect(`/teams/${team._id}`);
        });
    });
}

function create(req, res) {
    Player.create(req.body, function(err, players){
        res.redirect('/players/new');
    });
}

function newPlayer(req, res) {
    Player.find({}, function(err, players) {
        res.render('players/new', {
            players,
            title: 'Add Player'
        });
    });
}