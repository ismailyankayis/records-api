"use strict";

module.exports = function(app) {
    var Record = require("../controllers/RecordController");

    app
    .route("/api/records")
    .post(Record.getRecords);

};