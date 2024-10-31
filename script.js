//finds the square by its ID and stores it in a variable called button
const button = document.getElementById('but');
//add an event listener that looks for a click that then runs a function
button.addEventListener("click", changeColor)

//this function changes the background color to black upon click
function changeColor (){
    document.body.style.backgroundColor="black"
}





