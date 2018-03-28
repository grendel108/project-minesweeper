// id = "minesweeper-container" THis is container of the buttons.
// b1, b2: button id's.


let theParent = document.getElementById("minesweeper-container");
theParent.addEventListener("click", doSomething, false);
 
function doSomething(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        alert(clickedItem + " is/is not a bomb!");
    }
    e.stopPropagation();
}