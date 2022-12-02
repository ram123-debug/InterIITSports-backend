const Fixture = require('../models/Fixture');
const Match = require('../models/Match');
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;
exports.getAllFixtures = async (req, res) => {
    try {
        console.log("getAllFixtures", req.body);

        Fixture.find({} , {
            _id: false,
            sports: true,
            leagueMatches: true,
            knockoutMatches: true
        })
        .populate("leagueMatches","-_id -createdAt -updatedAt -__v -fixtureId")
        .populate("knockoutMatches","-_id -createdAt -updatedAt -__v -fixtureId")
        .exec((err, fixtures) => {
            if (err) return res.status(400).send(err);
            return res.status(200).json(fixtures);
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}


exports.createNewFixture = async (req, res) => {
    try {
        console.log("createNewFixture", req.body);

        const {sports} = req.body;
        const obj = {
            sports,
            leagueMatches: [],
            knockoutMatches: []
        }
        if (!sports){
            return res.status(400).json({
                msg: "Please enter a valid sports name."
            })
        }

        const newFixture = new Fixture(obj);
        await newFixture.save();

        return res.status(201).json(newFixture);

    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}


exports.addNewLeagueMatch = async (req, res) => {
    try {
        console.log("addNewLeagueMatch", req.body);
        const {fixtureId, date, day, dateTitle, time, pool, teams, score, location, streamUrl, metaData} = req.body;
        const obj = {date, day, dateTitle, time, pool, teams, score, location, streamUrl, metaData}

        if (!fixtureId || !date || !dateTitle || !day || !time || !pool || !teams || !location || !streamUrl) {
            return res.status(400).json({
                msg: "Please enter a valid data to update."
            })
        }

        const newMatch = new Match(obj);
        await newMatch.save();

        const updatedFixture = await Fixture.findByIdAndUpdate(fixtureId,{
            $push: {
                leagueMatches: newMatch._id
            }
        }) 
        return res.status(201).json(updatedFixture);

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


exports.addNewKnockMatch = async (req, res) => {
    try {
        console.log("addNewKnockMatch", req.body);
        const {fixtureId, date, dateTitle, time, day, pool, teams, score, location, streamUrl, metaData} = req.body;
        const obj = {fixtureId, date, dateTitle, time, day, pool, teams, score, location, streamUrl, metaData}
        
        if (!fixtureId || !date || !dateTitle || !day || !time || !teams || !location || !streamUrl) {
            return res.status(400).json({
                msg: "Please enter a valid data to update."
            })
        }

        const newMatch = new Match(obj);
        await newMatch.save();

        const updatedFixture = await Fixture.findByIdAndUpdate(fixtureId,{
            $push: {
                knockoutMatches: newMatch._id
            }
        }) 
        return res.status(201).json(updatedFixture);

    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}
exports.updateStreamURL = async (req, res) => {
    try {
        console.log('updateStreamURL',req.body);


    } catch (error)
    {
        return res.status(500).json({
            error:error.message
        })
    }
}

exports.updateScore = async (req, res) => {
    try {
        console.log('updateScore', req.body);
        const {fixtureId, date, dateTitle, time, day, pool, teams, score, location, streamUrl, metaData} = req.body;


    } catch (error)
    {
        return res.status(500).json({
            error:error.message
        })
    }
}