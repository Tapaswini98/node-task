const express = require("express");
const qr = require("qrcode");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/admin", (req, res) => {
    res.render("admin");
});

router.post("/scan", (req, res) => {
    const url = "Thank you for availing this offer";
    
    let qr1 = qr.toDataURL(url, (err, src) => {
        if (err)
        {
             res.send("Error occured");
        }
        res.render("scan", { src });
    });
    // console.log(qr1);
}); 

module.exports = router;