"use strict";

var mongoose = require("mongoose");
var Record = mongoose.model("Record");
var Dto_Response = require("../models/Dto_Response");
var helper = require("../../helpers/helper");

exports.getRecords = (req,res) => {
    let error = errorHandle(req, res);
    if(error !== undefined) {
        return res.status(400).send(error);
    } 

    var filter = {"createdAt": {"$gte": Date.parse(req.body.startDate), "$lt": Date.parse(req.body.endDate)}};

    Record.find(filter).then(data => {
        let recs = [];
        data = data.filter(rec => rec.counts.reduce((a,b) => {return a + b}, -1) < req.body.maxCount && rec.counts.reduce((a,b) => {return a + b}, -1) > req.body.minCount);
        data.map(rec => {
            recs.push({
                key: rec.key,
                createdAt: rec.createdAt,
                totalCount: rec.counts.reduce((a,b) => {return a + b}, -1)
            })
        });
        res.status(200).send(new Dto_Response(0, "Successful", recs))
    }).catch(err => {
        res.status(500).send(new Dto_Response(-1, err.message, []));
    })
}

function errorHandle(request, response) {
    if(!request.body) {
        return res.status(400).send(new Dto_Response(-1, "Request payload can not be empty!", []));
    }
    if(!request.body.startDate) return new Dto_Response(-1, "Start date can not be empty!", []);
    else if(!helper.validatedate(request.body.startDate)) return new Dto_Response(-1, "Start date validation error, please fix format of the date!", []);
    if(!request.body.endDate) return new Dto_Response(-1, "End date can not be empty!", []);
    else if(!helper.validatedate(request.body.endDate)) return new Dto_Response(-1, "End date validation error, please fix format of the date!", []);
    if(request.body.endDate <= request.body.startDate) return new Dto_Response(-1, "End date must be greater than start date!", []);
    if(!request.body.minCount) return new Dto_Response(-1, "Min count can not be empty!", []);
    else if(request.body.minCount < 0 ) return new Dto_Response(-1, "Min count must be greater than zero!", []);
    if(!request.body.maxCount) return new Dto_Response(-1, "Max count can not be empty!", []);
    else if(request.body.maxCount < 0 ) return new Dto_Response(-1, "Max count must be greater than zero!", []);
    if(request.body.maxCount < request.body.minCount) return new Dto_Response(-1, "Max count must be greater than min count!", []);
    return undefined;
}
