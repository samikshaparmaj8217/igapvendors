var express = require("express");
var bodyparser = require("body-parser");
var cookieparser = require("cookie-parser");
const Igapvendors = require("../models/Igapvendors");
const router = express.Router();

router.post("/save", async (req, res) => {
    let body = req.body;
    var igapvendor = new Igapvendors.Igapvendors();
    igapvendor.id = body.data.id;
    igapvendor.name = body.data.name;
    igapvendor.email = body.data.email;
    igapvendor.mobileno = body.data.mobileno;
    igapvendor.address = body.data.address;
    igapvendor.cityid = body.data.cityid;
    igapvendor.pincode = body.data.pincode;

    igapvendor.save().then(result => {
        console.log("Result");
        console.log(result);
        let data = {
            "status": "fail"
        }
        if (result.length != 0) {
            data = {
                "status": "success"
            }
        }
        res.end(JSON.stringify(data));
    },
        err => {
            console.log("Error : " + err);
            let data = {
                "data": {
                    "status": "fail"
                }
            };
            res.end(JSON.stringify(data));
        })
});

router.post("/get", async (req, res) => {
    let body = req.body;
    var igapvendor = new Igapvendors.Igapvendors();
    igapvendor.id = body.data.id;
    igapvendor.name = body.data.name;
    igapvendor.email = body.data.email;
    igapvendor.mobileno = body.data.mobileno;
    igapvendor.address = body.data.address;
    igapvendor.cityid = body.data.cityid;
    igapvendor.pincode = body.data.pincode;

    igapvendor.get().then(result => {

        let data = {
            "status": "success",
            "data": result
        }
        res.end(JSON.stringify(data));
    },
        err => {
            let data = {
                "status": "fail"
            }
            res.end(JSON.stringify(data));
            console.log(err);
        });

});

router.post("/list", async (req, res) => {
    var body = req.body;
    var igapvendor = new Igapvendors.Igapvendors();
   

    igapvendor.list().then(result => {
        console.log(result)
        let data = {
            "status": "success",
            "data": result
        }
        res.end(JSON.stringify(data));
    },
        err => {
            let data = {
                "status": "fail"
            }
            res.end(JSON.stringify(data));
            console.log(err);
        });
});

router.post("/delete", async (req, res) => {
    let body = req.body;
    var igapvendor = new Igapvendors.Igapvendors();
    igapvendor.id = body.data.id;


    igapvendor.delete().then(result => {

        let data = {
            "status": "success",
            "data": result
        }


        res.end(JSON.stringify(data));
    },
        err => {
            let data = {
                "status": "fail"
            }
            res.end(JSON.stringify(data));
            console.log(err)
        });
});


module.exports = router