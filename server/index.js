const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true});
mongoose.set("strictQuery", true);

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("MongoDB database connection established sauccessfully");
});

module.exports = {
    authenticateToken,
    genereateAccessToken,
};


const qrcodesRouter = require("./routes/qr-codes");
const usersRouter = require("./routes/users");

app.use("/items",qrcodesRouter);
app.use("/users",usersRouter);



app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});


function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,user) => {
        if(err) return res.sendStatus(403);

        req.user = user;
        next();
    });

}


function genereateAccessToken(user){
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "10m"});
}

