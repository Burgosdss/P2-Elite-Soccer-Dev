const Team = require('../models/team');

module.exports = {
    create
};

function create(req, res) {
    Team.findById(req.params.id, function(err, team) {
        team.reviews.push(req.body);
        team.save(function() {
            res.redirect(`/teams/${team._id}`);
        });
    });
}