const router = require("express").Router();
let Recipe = require("../models/recipe.model");
const { base64ToImage, imageToBase64, scaleDownImage } = require('../helpers/downscale');

const { authenticateToken } = require('../index');

router.post("/", authenticateToken, (req,res)=>{
    Recipe.find({useruid: req.body.useruid}).then(recipes=>res.json(recipes)).catch(err=>res.status(400).json("error: "+ err));
});


router.post("/add", authenticateToken, async (req,res)=>{
    const useruid = req.body.useruid;
    const title = req.body.title;
    const base64String = req.body.image;
    const ingredients = req.body.ingredients;
    const cookingSteps = req.body.cookingSteps;
    const comment = req.body.comment;
    

    // Example usage:
    const scaleFactor = 0.2; // Scale factor (0.5 will reduce the image to half its original size)
    let image;
    const imageBuffer = base64ToImage(base64String);
    scaleDownImage(imageBuffer, scaleFactor)
    .then((resizedImageBuffer) => {
        image = imageToBase64(resizedImageBuffer);
        const newRecipe = new Recipe({
            useruid,
            title,
            image,
            ingredients,
            cookingSteps,
            comment,
        });
    
        newRecipe.save().then(()=>{
            res.json("Recipe added!");
        }).catch(err => res.status(400).json("Error: "+ err));
    })
    .catch((error) => {
        console.error('Error scaling down image:', error);
    });    

    
    
    
    // sender objekt med tilbage
    // newRecipe.save().then((newRecipe)=>{
    //     res.json(newRecipe);
    // }).catch(err => res.status(400).json("Error: "+ err));
});

router.post("/:id", authenticateToken, (req,res)=>{
    Recipe.findOne({_id:req.params.id, useruid: req.body.useruid}).then(recipe=>res.json(recipe)).catch(err=>res.status(400).json("error: "+ err));
});

router.delete("/:id", authenticateToken, (req,res)=>{
    Recipe.findOneAndDelete({useruid:req.params.id}).then(()=>res.json("Recipe deleted")).catch(err=>res.status(400).json("error: "+ err));
});


router.post("/update/:id",authenticateToken, (req,res)=>{
    Recipe.findOne({useruid:req.params.id}).then(recipe=>{
        recipe.title = req.body.title;
        recipe.image = req.body.image;
        recipe.ingredients = req.body.ingredients;
        recipe.cookingSteps = req.body.cookingSteps;
        recipe.comment = req.body.comment;

        recipe.save().then(()=>res.json("Recipe Updated!")).catch(err => res.status(400).json("Error: "+ err));
    })
    .catch(err=>res.status(400)
    .json("error: "+ err));

});



module.exports = router;