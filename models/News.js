const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = mongoose.Schema({
    imageUrl: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    minorImageUrl: {
        type: String
    },
    minorTitle: {
        type: String
    },
    minorDescription: {
        type: String
    }
}, { timestamps: true });

const News = mongoose.model('news', newsSchema);
module.exports = News