// console.log("hello")
var animals = ["chicken", "cow", "horse"]
//empty button wrap
function populateBttn (arrayToUse, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty()

    for( var i = 0; i < arrayToUse.length; i++){
        var a = $("<button >")
        a.addClass(classToAdd)
        a.attr("data-type", arrayToUse[i])
        a.text(arrayToUse[i])
        $(areaToAddTo).append(a)
    }
}

populateBttn(animals, "animal-button", "#animals")
//render animals array values as buttons in the (button warp div) on the HTML

// loop athrought animals arr for each animal(val) create a button & add (val) animal as its text

// in the loop append each button to the buttonwarp div. 

