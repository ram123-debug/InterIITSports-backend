const News = require('../models/News');

exports.getAllNews = async (req, res) => {
    try {
        News.find({}, {
            imageUrl: true,
            title: true,
            description: true,
            minorImageUrl: true,
            minorTitle: true,
            minorDescription: true
        })
        .exec((err, news) => {
            console.log(news);
            if (err) return res.status(400).send(err);
            return res.status(200).json(news);
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.createNews = async (req, res) => {
    try {
        console.log("createNews", req.body);

        const { imageUrl, title, description, minorImageUrl, minorTitle, minorDescription } = req.body;
        const obj = { imageUrl, title, description, minorImageUrl, minorTitle, minorDescription }

        if (!imageUrl || !title || !description || !minorImageUrl || !minorDescription || !minorTitle) {
            return res.status(400).json({
                msg: "Please enter a valid data."
            })
        }

        const newNews = new News(obj);
        await newNews.save();

        return res.status(201).json(newNews);
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


exports.updateNews = async (req, res) => {
    try {
        console.log("updateNews", req.body);

        const { newsId, imageUrl, title, description, minorImageUrl, minorTitle, minorDescription } = req.body;
        const data = { imageUrl, title, description, minorImageUrl, minorTitle, minorDescription }
        if (!imageUrl || !title || !description || !minorImageUrl || !minorDescription || !minorTitle) {
            return res.status(400).json({
                msg: "Please enter a valid data to update."
            })
        }

        News.findByIdAndUpdate(newsId,
            data, (err, news) => {
                if (err) return res.status(400).send(err);
                return res.status(200).json(news);
            })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}
