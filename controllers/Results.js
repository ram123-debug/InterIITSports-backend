const Result = require('../models/Result');
const ResultPool = require('../models/ResultPool');
const TeamResult = require('../models/TeamResult');


exports.getAllResults = async (req, res) => {
    try {
        console.log("getAllResults");

        Result.find({} , {
            _id: false,
            createdAt: false,
            updatedAt: false,
            __v: false
        })
        .populate({
            path : 'pools',
            select: '-_id -createdAt -updatedAt -__v',
            populate : {
              path : 'teamResults',
                select: '-_id -createdAt -updatedAt -__v',
            }
          })
        .exec((err, results) => {
            if (err) return res.status(400).send(err);
            return res.status(200).json(results);
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}


exports.createNewSports = async (req, res) => {
    try {
        console.log("createNewSports", req.body);

        const {sports} = req.body;
        const obj = {
            sports
        }
        if (!sports){
            return res.status(400).json({
                msg: "Please enter a valid sports name."
            })
        }

        const newResult = new Result(obj);
        await newResult.save();

        return res.status(201).json(newResult);

    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}


exports.addNewPool = async (req, res) => {
    try {
        console.log("addNewPool", req.body);
        const {sportId, pool} = req.body;
        const obj = {pool}

        console.log(sportId, pool)
        if (!pool || !sportId) {
            return res.status(400).json({
                msg: "Please enter a valid data to update."
            })
        }

        const newResultPool = new ResultPool(obj);
        await newResultPool.save();

        const updatedResult = await Result.findByIdAndUpdate(sportId,{
            $push: {
                pools: newResultPool._id
            }
        }) 
        return res.status(201).json(newResultPool);
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


exports.addNewPoolTeam = async (req, res) => {
    try {
        console.log("addNewKnockMatch", req.body);
        const {poolId, teamName} = req.body;
        const obj = {team: teamName}
        
        if (!teamName || !poolId) {
            return res.status(400).json({
                msg: "Please enter a valid data to update."
            })
        }

        const newTeamResult = new TeamResult(obj);
        await newTeamResult.save();

        const updatedTeamResult = await ResultPool.findByIdAndUpdate(poolId,{
            $push: {
                teamResults: newTeamResult._id
            }
        }) 
        return res.status(201).json(newTeamResult);

    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}

// fix me
exports.updateTeamResult = async (req, res) => {
    try {
        console.log("updateTeamResult", req.body);
        const {teamId, played, won, lost, drawn, points} = req.body;
        const obj = {played, won, lost, drawn, points}
        
        if (!teamName || !poolId) {
            return res.status(400).json({
                msg: "Please enter a valid data to update."
            })
        }

        const updatedTeamResult = await TeamResult.findByIdAndUpdate(teamId,obj) 
        return res.status(200).json(updatedTeamResult);

    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}