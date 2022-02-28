




let x = prompt("Please enter a (x) number", "enter (x)");
let y = prompt("Please enter a (y) number", "enter (y)");
let z = prompt("Please enter a (z) number", "enter (z)");

const tal = [x, y, z,];
tal.sort(function(a, b){return a-b});
document.getElementById("sort").innerHTML = tal;

