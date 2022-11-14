const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fixtureSchema = mongoose.Schema({
    sports: {
        type: String
    },
    leagueMatches: [{
        type: Schema.Types.ObjectId,
        ref: 'matches'
    }],
    knockoutMatches: [{
        type: Schema.Types.ObjectId,
        ref: 'matches'
    }]
}, { timestamps: true });

const Fixture = mongoose.model('fixtures', fixtureSchema);
module.exports = Fixture