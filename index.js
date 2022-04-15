// this makes a variable that selects the element
var paragraph = document.getElementById("paragraph");
// this is the function that logs a piece of text when my selected element is copied
function copyP() {
    console.log("It was copied!!! This function worked!!")
}
// this adds the event listener to my element and tells the function to run my function when the event is oberved
paragraph.addEventListener("copy", copyP)
