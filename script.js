let mixed_Array = ["orange",50, ["mango","strawberry",4], 32];
document.getElementById("Array").innerHTML = mixed_Array[2][1];
 
let hobbies = ["painting","sketching","Gaming","gardening"];

document.getElementById("join").innerHTML = hobbies.join(",");
hobbies.pop();

document.getElementById("pop1").innerHTML = hobbies;

hobbies.pop();

document.getElementById("pop2").innerHTML = hobbies;