const router = require("express").Router();
let Recipe = require("../models/recipe.model");

const { authenticateToken } = require('../index');

router.post("/", authenticateToken, (req,res)=>{
    Recipe.find({useruid: req.body.useruid}).then(recipes=>res.json(recipes)).catch(err=>res.status(400).json("error: "+ err));
});


router.post("/add", authenticateToken, async (req,res)=>{
    const useruid = req.body.useruid;
    const title = req.body.title;
    const image = req.body.image;
    const ingredients = req.body.ingredients;
    const cookingSteps = req.body.cookingSteps;
    const comment = req.body.comment;
    

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