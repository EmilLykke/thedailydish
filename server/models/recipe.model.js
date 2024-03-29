const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    useruid: { type: String, required: true,},
    title: { type: String, required: true,},
    image: { type: String, required: true,},
    ingredients: { type: Array, required: true,},
    cookingSteps: { type: Array, required: true,},
    comment: { type: String, required: true,},

}, {
    timestamps:true,
});

const Recipe = mongoose.model("Recipe", recipeSchema, "Recipes");

module.exports = Recipe;