//STUB STARTING CODES
const express = require("express");
// const bodyParser = require("body-parser");
// module.exports = router;


const app = express();
/* --------------------------------- add ejs -------------------------------- */
app.set('view engine', 'ejs');
/* -------------------------------------------------------------------------- */

app.get("/", function(req, res) {

    /* -------------------------------------------------------------------------- */
    /*                       creat a logic to detect Weekend                      */
    /* -------------------------------------------------------------------------- */

    /* ------------------------------- creat date ------------------------------- */
    // ANCHOR Date bog standard 
    var today = new Date();

    /* ----------------- getting day by number and getDay method ---------------- */
    var currentDay = today.getDay();

    /* ------------------------ creat var for day as ejs ------------------------ */
    var day = "";

    // NOTE : USING (If)
    /* -------------------------------------------------------------------------- */
    /*                                  using if                                  */
    /* -------------------------------------------------------------------------- */
    // if (currentDay === 6 || currentDay === 0) {
    //     day = "weekend"
    //         // res.write("<h1>Hooray,it's weekend</h1>");
    //         // res.sendFile(__dirname + "/weekend.html")
    // } else {
    //     day = "weekday"
    //         // res.write("<p>It's not weekend</p>");
    //         // res.write("<h1>Boo!I have to work today</h1>");
    //         // res.send();

    //     /* -------- instead of using several res.write we use html sendFile() ------- */
    //     // res.sendFile(__dirname + "/weekday.html")

    // }

    /* -------------------------------------------------------------------------- */


    /* -------------------------------------------------------------------------- */
    /*                                using switch                                */
    /* -------------------------------------------------------------------------- */
    // NOTE : USING (SWITCH) INSTEAD OF IF
    switch (currentDay) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
        case 5:
            day = "Friday"
        case 6:
            day = "Saturday"

        default:
            console.log("Error: currentDay is equal to: " + currentDay)
            break;
    }
    /* -------------------------------------------------------------------------- */

    /* ------------------------------- render ejs ------------------------------- */
    // NOTE : RENDERING EJS 
    res.render("list", {
        kindOfDay: day
    });

})

app.listen(3000, function() {
    console.log("Server started on port 3000")
})