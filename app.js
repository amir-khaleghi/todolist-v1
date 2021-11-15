const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res) {

    /* -------------------------------------------------------------------------- */
    /*                       creat a logic to detect Weekend                      */
    /* -------------------------------------------------------------------------- */

    /* ------------------------------- creat date ------------------------------- */
    // ANCHOR Date bog standard 
    var today = new Date();

    /* ----------------- getting day by number and getDay method ---------------- */
    var currentDay = today.getDay();


    if (currentDay === 6 || currentDay === 0) {

        res.write("<h1>Hooray,it's weekend</h1>");
    } else {
        res.write("<p>It's not weekend</p>");
        res.write("<h1>Boo!I have to work today</h1>");
        res.send();
    }

})

app.listen(3000, function() {
    console.log("Server started on port 3000")
})