var computer = Math.floor(Math.random()*100);



console.log(computer);



function game(){
   var user = document.querySelector(".guess").value; 
    console.log(user);
if (user == computer) {
    document.getElementById("guessResponse").innerHTML = "<br> Right.";
}
else if (user > computer) {
    document.getElementById("guessResponse").innerHTML = "<br> Too high.";
}
else if (user < computer){
    document.getElementById("guessResponse").innerHTML = "<br> Too low.";
}
}


