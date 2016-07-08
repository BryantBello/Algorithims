var secretRecipe = (function(){

  secretIngredients = function(){ var x = ["Quinoa", "Tobasco", "Potatoes", "Radish", "Love"]; return x
};
  secretSteps = function(){ var y = ["Wash quinoa (VERY IMPORTANT!!)", "Bake potatoes and Radishes", "Add Tobasco", "Show love"]; return y
};
  return{ prepareQuinoa: function(){
            for (var i=0; i< this.secretSteps.length; i++){
                console.log("Step run...")
            }
            return "Quinoa made!"
          }
        }
})();

console.log(secretRecipe.prepareQuinoa());
console.log(secretRecipe.secretIngredients);
