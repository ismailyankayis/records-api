"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RecordSchema = new Schema({
    key: String,
    createdAt: Date,
    counts: [],
    value: String
});

module.exports = mongoose.model("Record", RecordSchema);