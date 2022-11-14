const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = mongoose.Schema({
    fixtureId: Schema.Types.ObjectId,
    date: {
        type: Number
    },
    dateTitle: {
        type: String
    },
    day: {
        type: String
    },
    time: {
        type: String
    },
    pool: {
        type: String
    },
    teams: [{
        type: String
    }],
    score: {
        type: String,
        default: "0 - 0"
    },
    location: {
        type: String
    },
    streamUrl: {
        type: String
    },
    metaData: {
        type: JSON,
        default: {}
    }
}, { timestamps: true });

const Match = mongoose.model('matches', matchSchema);
module.exports = Match