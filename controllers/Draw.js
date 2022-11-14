const Draws = require('../models/Draw');
const Pool = require('../models/Pool');

exports.getAllDraws = async (req, res) => {
    try {
        console.log("getAllDraws", req.body);
        Draws.find({}, {
            _id: false,
            createdAt: false,
            updatedAt: false,
            __v: false
        })
        .populate("pools","-_id -createdAt -updatedAt -__v -fixtureId")
        .exec((err, draws) => {
            if (err) return res.status(400).send(err);
            res.status(200).json(draws);
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.getSportsDraw = async (req, res) => {
    try {
        console.log("getSportsDraw", req.params);
        const {sport} = req.params;
        if (!sports){
            return res.status(400).json({
                msg: "Please enter a valid sports name."
            })
        }

        Draws.findOne({ sports: sport }, {
            _id: false,
            createdAt: false,
            updatedAt: false,
            __v: false
        })
        .populate("pools","-_id -createdAt -updatedAt -__v -fixtureId")
        .exec((err, draws) => {
            if (err) return res.status(400).send(err);
            return res.status(200).json(draws);
        });

    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}


exports.createNewDraw = async (req, res) => {
    try {
        console.log("createNewDraw", req.body);
        const {sports} = req.body;
        const obj = {
            sports,
            pools: []
        }
        if (!sports){
            return res.status(400).json({
                msg: "Please enter a valid sports name."
            })
        }

        const newDraw = new Draws(obj);
        await newDraw.save();

        return res.status(201).json(newDraw);
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}

exports.addNewPool = async (req, res) => {
    try {
        console.log("addNewPool", req.body);
        const {drawId, pool, teams} = req.body;
        const obj = {
            drawId,
            pool,
            teams
        }
        if (!drawId || !pool){
            return res.status(400).json({
                msg: "Please enter a valid pool or drawId."
            })
        }
        const newPool = new Pool(obj);
        await newPool.save();

        const updatedDraw = await Draws.findByIdAndUpdate(drawId,{
            $push: {
                pools: newPool._id
            }
        }) 
        return res.status(201).json(updatedDraw);
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}