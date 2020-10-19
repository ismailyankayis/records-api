const express = require('express');
const app = express();
const db = require("./config/db-connection");
var bodyParser = require('body-parser');
var Record = require('./api/models/Record');

var cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// mongoose instance db connection
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the database!");
}).catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
});

// Routes
require('./api/routes/RecordRoutes')(app);

module.exports = app;