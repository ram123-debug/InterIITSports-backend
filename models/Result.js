const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = mongoose.Schema({
    sports: {
        type: String,
    },
    pools: [{
        type: Schema.Types.ObjectId,
        ref: 'resultpools',
        default: []
    }]
}, { timestamps: true });

const Results = mongoose.model('results', resultSchema);
module.exports = Results