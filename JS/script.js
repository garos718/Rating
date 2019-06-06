var bolt1 = document.getElementById("bolt1");
var bolt2 = document.getElementById("bolt2");
var bolt3 = document.getElementById("bolt3");
var bolt4 = document.getElementById("bolt4");
var bolt5 = document.getElementById("bolt5");
var box = document.getElementById("icons");

//click outside icons box
document.addEventListener("click", function(event){
    if(event.target != box && event.target.parentNode != box){
        bolt1.style.color = "red";
        bolt2.style.color = "red";
        bolt3.style.color = "red";
        bolt4.style.color = "red";
        bolt5.style.color = "red";
    }
})

//bolt1
bolt1.addEventListener("mouseover", function(){
    bolt1.style.color = "greenyellow";
    bolt2.style.color = "red";
    bolt3.style.color = "red";
    bolt4.style.color = "red";
    bolt5.style.color = "red";
})

bolt1.addEventListener("click", function(){
    bolt1.style.color = "greenyellow";
    bolt2.style.color = "red";
    bolt3.style.color = "red";
    bolt4.style.color = "red";
    bolt5.style.color = "red";
})

//bolt2
bolt2.addEventListener("mouseover", function(){
    bolt1.style.color = "greenyellow";
    bolt2.style.color = "greenyellow";
    bolt3.style.color = "red";
    bolt4.style.color = "red";
    bolt5.style.color = "red";
})

bolt2.addEventListener("click", function(){
    bolt1.style.color = "greenyellow";
    bolt2.style.color = "greenyellow";
    bolt3.style.color = "red";
    bolt4.style.color = "red";
    bolt5.style.color = "red";
})

//bolt3
bolt3.addEventListener("mouseover", function(){
    bolt1.style.color = "greenyellow";
    bolt2.style.color = "greenyellow";
    bolt3.style.color = "greenyellow";
    bolt4.style.color = "red";
    bolt5.style.color = "red";
})

bolt3.addEventListener("click", function(){
    bolt1.style.color = "greenyellow";
    bolt2.style.color = "greenyellow";
    bolt3.style.color = "greenyellow";
    bolt4.style.color = "red";
    bolt5.style.color = "red";
})

//bolt4
bolt4.addEventListener("mouseover", function(){
    bolt1.style.color = "greenyellow";
    bolt2.style.color = "greenyellow";
    bolt3.style.color = "greenyellow";
    bolt4.style.color = "greenyellow";
    bolt5.style.color = "red";

})

bolt4.addEventListener("click", function(){
    bolt1.style.color = "greenyellow";
    bolt2.style.color = "greenyellow";
    bolt3.style.color = "greenyellow";
    bolt4.style.color = "greenyellow";
    bolt5.style.color = "red";

})

//bolt5
bolt5.addEventListener("mouseover", function(){
    bolt1.style.color = "greenyellow";
    bolt2.style.color = "greenyellow";
    bolt3.style.color = "greenyellow";
    bolt4.style.color = "greenyellow";
    bolt5.style.color = "greenyellow";
})

bolt5.addEventListener("click", function(){
    bolt1.style.color = "greenyellow";
    bolt2.style.color = "greenyellow";
    bolt3.style.color = "greenyellow";
    bolt4.style.color = "greenyellow";
    bolt5.style.color = "greenyellow";
})

