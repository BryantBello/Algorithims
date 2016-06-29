
var arr = [];
for (var i=0, t=400000; i<t; i++) {
    arr.push(Math.round(Math.random() * t))
}
​
=============================================
​
function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
​
function selectionSort(items){
​
    var len = items.length,
        min;
​
    for (i=0; i < len; i++){
​
        //set minimum to this position
        min = i;
​
        //check the rest of the array to see if anything is smaller
        for (j=i+1; j < len; j++){
            if (items[j] < items[min]){
                min = j;
            }
        }
​
        //if the minimum isn't in the position, swap it
        if (i != min){
            swap(items, i, min);
        }
    }
​
    return items;
}
​
console.log("PRE-SORT");
console.log(arr.join(" "));
console.log("---------------------------")
console.log("POST-SORT");
console.log(selectionSort(arr).join(" "));
