const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({ 
    name: {
        type: String,
        required: true,
        unique: true,
    },
    position: {
        type: String,
        enum: [ 'Goalkeeper', 'Right Fullback', 'Left Fullback', 'Center Back', 'Center Back or Sweeper', 
            'Defending/Holding Midfielder', 'Right Midfielder/Winger','Central/Box-to-Box Midfielder','Striker','Attacking Midfielder/Playmaker','Left Midfielder/Wingers'],
        required: true,
    },
 }, { timestamps: true });

 module.exports = mongoose.model('Player', playerSchema);
