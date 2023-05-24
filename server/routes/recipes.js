const router = require("express").Router();
let QrCode = require("../models/qrcode.model");
const { v4 } = require("uuid");

const { authenticateToken } = require('../index');

router.get("/", authenticateToken, (req,res)=>{
    QrCode.find().then(qr_codes=>res.json(qr_codes)).catch(err=>res.status(400).json("error: "+ err));
});


router.post("/add", authenticateToken, async (req,res)=>{
    const username = req.body.username;
    const item = req.body.item;
    const description = req.body.description;
    const lastStatus = Date.parse(req.body.lastStatus);
    const uid = v4();

    const url = "http://localhost:3000/items/"+uid;
    // const url = "http://lykkegrann.dk:3000/items/"+uid;
    const qr = await generateQRcode(url);
    

    const newQrCode = new QrCode({
        username,
        item,
        uid,
        qr,
        description,
        lastStatus,
    });

    newQrCode.save().then((newQrCode)=>{
        res.json(newQrCode);
    }).catch(err => res.status(400).json("Error: "+ err));
});

router.get("/:id", authenticateToken, (req,res)=>{
    QrCode.findOne({uid:req.params.id}).then(qr_code=>res.json(qr_code)).catch(err=>res.status(400).json("error: "+ err));
});

router.delete("/:id", authenticateToken, (req,res)=>{
    QrCode.findOneAndDelete({uid:req.params.id}).then(()=>res.json("QR code deleted")).catch(err=>res.status(400).json("error: "+ err));
});


router.post("/update/:id",authenticateToken, (req,res)=>{
    QrCode.findOne({uid:req.params.id}).then(qr_code=>{
        qr_code.username = req.body.username;
        qr_code.item = req.body.item;
        qr_code.description = req.body.description;
        qr_code.lastStatus = Date.parse(req.body.lastStatus);

        qr_code.save().then(()=>res.json("QR code Updated!")).catch(err => res.status(400).json("Error: "+ err));
    })
    .catch(err=>res.status(400)
    .json("error: "+ err));

});



module.exports = router;