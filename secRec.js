"use strict";
// We need to fix this code such that developers can run "prepareQuinoa" but not have access to the ingredients or steps.
var myModule = (function() {
    let secretIngredients = ["Quinoa", "Tobasco", "Potatoes", "Radish", "Love"];
    let secretSteps = ["Wash quinoa (VERY IMPORTANT!!)", "Bake potatoes and Radishes", "Add Tobasco", "Show love"];
    return {
        prepareQuinoa: function () {
            for (var i = 0; i < secretSteps.length; i++) {
                console.log("Step run...")
            }
            return "Quinoa made!"
        }
    }
})();
// Yes Quinoa please!
console.log(myModule.prepareQuinoa());
// Oh dearie me. Mother May's secret recipe....
console.log(myModule.secretIngredients);
