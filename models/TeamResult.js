const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamResults = mongoose.Schema({
    team: {
        type: String
    },
    played: {
        type: Number,
        default: 0
    },
    won: {
        type: Number,
        default: 0
    },
    lost: {
        type: Number,
        default: 0
    },
    drawn: {
        type: Number,
        default: 0
    },
    points: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const TeamResults = mongoose.model('teamresults', teamResults);
module.exports = TeamResults