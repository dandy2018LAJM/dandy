

/*
*STACK OVERFLOW CODE 
* Ivan Baev
*/
console.log("THis is working");
var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    var del = document.getElementById("inputForm");
    del.parentElement.removeChild(del);
};