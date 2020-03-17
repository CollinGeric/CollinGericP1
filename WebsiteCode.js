console.log("Why are you reading this? What are you some kind of Code Nerd! Lol!") 


var firstNum = Math.floor(Math.random() * 10); 
var secNum = Math.floor(Math.random() * 10);

console.log(firstNum); 
console.log(secNum);  

switch(firstNum) {
    case 1: 
        var firstName = "Nifty"
        break; 
    case 2: 
        var firstName = "Shifty" 
        break; 
    case 3: 
        var firstName = "Boxy" 
        break; 
    case 4: 
        var firstName = "Clunky"
        break; 
    case 5:
        var firstName = "Lucky" 
        break; 
    case 6: 
        var firstName = "Kind"; 
        break; 
    case 7: 
        var firstName = "Loose"; 
        break; 
    case 8: 
        var firstName = "Super"; 
        break; 
    case 9: 
        var firstName = "Jumpy"; 
        break; 
    case 10: 
        var firstName = "Old"; 
        break; 
    case 0: 
        var firstName = "French"; 
}  

switch(secNum) {
    case 1: 
        var secName = "Canoe"
        break; 
    case 2: 
        var secName = "Robot" 
        break; 
    case 3: 
        var secName = "Cylinder" 
        break; 
    case 4: 
        var secName = "Dog"
        break; 
    case 5:
        var secName = "Pikachu" 
        break; 
    case 6: 
        var secName = "Fox"; 
        break; 
    case 7: 
        var secName = "Apple"; 
        break; 
    case 8: 
        var secName = "Sheep"; 
        break; 
    case 9: 
        var secName = "Lamp"; 
        break; 
    case 10: 
        var secName = "Computer"; 
        break; 
    case 0: 
        var secName = "Guitar"; 
} 

console.log(firstName + secName);
console.log("Done!"); 

var username = firstName + " " + secName; 

var nameEl = document.getElementById("username"); 

nameEl.textContent = username; 
