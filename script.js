//finds the square by its ID and stores it in a variable called button
const button = document.getElementById('but');
//code didn't work initially because block was set to a class not ID
const block = document.getElementById('block')


//add an event listener that looks for a click that then runs a function
button.addEventListener("click", changeColor)

/*this function changes the background color to black upon click
function changeColor (){
    block.style.backgroundColor="black"
}
*/

// remember that === is for comparison not assignment, this function allows for the toggling between colors
function changeColor(){
    if (block.style.backgroundColor === 'green') {
        block.style.backgroundColor = 'black'
    } else {
        block.style.backgroundColor = 'green'
    }
}


