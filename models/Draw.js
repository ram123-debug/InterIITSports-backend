const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drawSchema = mongoose.Schema({
    sports: {
        type: String,
    },
    pools: [{
        type: Schema.Types.ObjectId,
        ref: 'pools',
        default: []
    }]
}, { timestamps: true });

const Draws = mongoose.model('draws', drawSchema);
module.exports = Draws