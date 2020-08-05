const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = Schema({
    content: String,
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    }
}, { timestamps: true });

const teamSchema = new Schema({
    teamname: {
        type: String,
        require: true,
    },
    location:{
        type: String,
        require: true,
    },
    league: String,
    reviews: [reviewSchema],
    roster:[{type: Schema.Types.ObjectId, ref: 'Player'}],
},{ timestamps: true });

    module.exports = mongoose.model('Team', teamSchema);
