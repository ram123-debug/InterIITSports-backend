const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const poolSchema = mongoose.Schema({
    drawId: Schema.Types.ObjectId,
    pool: {
        type: String
    },
    teams: [{
        type: String
    }]
}, { timestamps: true });

const Pool = mongoose.model('pools', poolSchema);
module.exports = Pool