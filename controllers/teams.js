const Team = require('../models/team');
const Player = require('../models/player');

module.exports = {
  index,
  show,
  new: newTeam,
  create,
  removePlayer
};

function index(req, res) {
  Team.find({}, function(err, teams) {
    res.render('teams/index', { title: 'All Teams', teams });
  });
}

function show(req, res) {
  Team.findById(req.params.id).populate('roster').exec(function(err, team) {
    Player.find({ _id: {$nin: team.roster}}, function(err, players) {
      res.render('teams/show', { title: 'Team Detail', team, players });
    });
  });
}

function newTeam(req, res) {
  res.render('teams/new', { title: 'Add Team' });
}

function create(req, res) {
  const team = new Team(req.body);
  team.save(function(err) {
    // one way to handle errors
    if (err) return res.redirect('/teams/new');
    console.log(team);
    // for now, redirect right back to new.ejs
    res.redirect(`/teams/${team._id}`);
  });
}

function removePlayer(req, res){
  Team.findById(req.params.id, function(err, team){
    const indexPlayer = team.roster.indexOf(req.params.idp);
    team.roster.splice(indexPlayer, 1);
    team.save(function(err){
    res.redirect(`/teams/${team._id}`)
    });
  });
}


