// import express  from "express";
// import bodyParser from "body-parser";

// const app=express();
// const port=3000;
 
// app.use(bodyParser.urlencoded({extended:true}));

// app.get("/",(req,res)=>{
//     res.render("index.ejs")
// })

// app.listen(port,()=>{
//     console.log(`app is running on port ${port}`)
// })



import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const recipes = {
    "pizza": {
      "title": "Margherita Pizza",
      "ingredients": [
        "1 pizza dough",
        "1/2 cup tomato sauce",
        "1 cup shredded mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil for drizzling"
      ],
      "instructions": [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough on a floured surface.",
        "Spread the tomato sauce over the dough.",
        "Sprinkle shredded mozzarella cheese evenly on top.",
        "Bake in the oven for 10-12 minutes or until the crust is golden brown.",
        "Once out of the oven, top with fresh basil leaves and drizzle with olive oil."
      ]
    },
    "burger": {
      "title": "Classic Cheeseburger",
      "ingredients": [
        "1 lb ground beef",
        "4 burger buns",
        "4 slices cheddar cheese",
        "Lettuce, tomato, onions",
        "Salt and pepper to taste"
      ],
      "instructions": [
        "Preheat the grill or stovetop to medium-high heat.",
        "Form the ground beef into 4 patties and season with salt and pepper.",
        "Cook the patties on the grill or stovetop for about 4-5 minutes per side, until desired doneness.",
        "Toast the burger buns on the grill for 1-2 minutes.",
        "Assemble the burger by placing a patty on the bottom bun, topping with a slice of cheese, lettuce, tomato, and onions, then add the top bun."
      ]
    },
    "pasta": {
      "title": "Spaghetti Aglio e Olio",
      "ingredients": [
        "200g spaghetti",
        "4 cloves garlic, thinly sliced",
        "1/4 cup olive oil",
        "1/4 teaspoon red pepper flakes",
        "Fresh parsley, chopped",
        "Salt and pepper to taste"
      ],
      "instructions": [
        "Cook the spaghetti according to package instructions until al dente.",
        "In a large pan, heat olive oil over medium heat and add sliced garlic. Cook until golden brown, about 2-3 minutes.",
        "Add the red pepper flakes and a bit of salt and pepper.",
        "Once the pasta is cooked, reserve some pasta water and drain.",
        "Toss the pasta in the garlic-infused oil mixture, adding pasta water if necessary to create a smooth sauce.",
        "Garnish with fresh parsley and serve."
      ]
    }
  };
  

const app = express();
const port = 3000;

app.use(express.static("public"));

app.set('view engine', 'ejs');


app.set('views', path.join(__dirname, 'views'));


app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index",{recipes:null});
});

app.post("/recipe",(req,res)=>{
    const recipeChoice = req.body.choice; 
 
  let selectedRecipe;
    switch (recipeChoice) {
        case "burger":
           selectedRecipe=recipes.burger

            break;

        case "pizza":
            
            selectedRecipe=recipes.pizza

            break;

        case "pasta":

            selectedRecipe=recipes.pasta

            break;
    
        default:
            break;
    }
    if (selectedRecipe){
        res.render("index",{
            recipes:selectedRecipe
        })
    }
    else{

    res.redirect("/")
}
})

app.listen(port, () => {

    console.log(`App is running on port ${port}`);

});
