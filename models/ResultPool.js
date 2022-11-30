const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultPoolsSchema = mongoose.Schema({
    pool: {
        type: String,
    },
    teamResults: [{
        type: Schema.Types.ObjectId,
        ref: 'teamresults',
        default: []
    }]
}, { timestamps: true });

const ResultPools = mongoose.model('resultpools', resultPoolsSchema);
module.exports = ResultPools