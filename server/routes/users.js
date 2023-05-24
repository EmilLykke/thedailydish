const router = require("express").Router();
let User = require("../models/user.model");
let RefreshTokenSchema = require("../models/refreshToken.model")
const jwt = require("jsonwebtoken");
const { v4 } = require("uuid");
const { authenticateToken, genereateAccessToken } = require('../index');

// const crypto = require('crypto');

// function sha256(data) {
//     return crypto.createHash("sha256").update(data, "binary").digest("hex");
//     //                                               ------  binary: hash the byte string
// }

router.get("/", authenticateToken, (req,res)=>{
    User.find().then(users=>res.json(users)).catch(err=>res.status(400).json("error: "+ err));
});



router.post("/login", async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    // User.findOne({username:username, password:password}).then(user=>res.json(user.username)).catch(err=>res.status(400).json("error: "+ err));
    const response = await User.findOne({username:username, password:password});

    const user = { name: username, useruid: response.useruid };

    const accessToken = genereateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

    // const newRefreshTokenSchema = new RefreshTokenSchema({ refreshToken: refreshToken });
    // newRefreshTokenSchema.save().then(()=>res.json("RefreshToken added!")).catch(err => res.status(400).json("Error: "+ err));
    // newRefreshTokenSchema.save();
    // console.log(re);
    res.json({accessToken: accessToken, refreshToken: refreshToken});
    
    
});


router.post("/register",(req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const useruid = v4();

    const newUser = new User({username,email,password,useruid});

    newUser.save().then(()=>res.json("User added!")).catch(err => res.status(400).json("Error: "+ err));

});

router.post("/token", async (req,res)=>{
    const refreshToken = req.body.token;
    const response = await RefreshTokenSchema.findOne({token: refreshToken});
    console.log(response);
    if(refreshToken == null) return res.sendStatus(401);
    if(response == null) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        const accessToken = genereateAccessToken({name:user.name});
        res.json({accessToken:accessToken})
    });
});


module.exports = router;