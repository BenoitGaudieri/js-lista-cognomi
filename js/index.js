// References
var newSurname = document.getElementById("new-surname");
var surnameList = document.getElementById("surname-list");
var btnAdd = document.getElementById("add");
var list = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

// Event Listener
btnAdd.addEventListener("click", function() {
    // Capitalize surname value
    var surnameCap =
        newSurname.value.charAt(0).toUpperCase() +
        newSurname.value.substring(1);

    // Add capitalized surname to list
    list.push(surnameCap);

    // Empty str for output
    var items = "";

    // Sort list
    list.sort();
    console.log(list);

    // Index Of
    document.getElementById(
        "position"
    ).innerHTML = `${surnameCap} sei il numero ${list.indexOf(surnameCap) +
        1} della lista!`;

    // Aggiunta alla str d'output
    for (var i = 0; i < list.length; i++) {
        items += "<li><span>" + list[i] + "</span></li>";
    }

    // output
    document.getElementById("elenco").className = "show";
    surnameList.innerHTML = items;

    // reset
    newSurname.value = "";
    newSurname.focus();
});

// EXTRA
// Press enter in the form to trigger the button event
newSurname.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});

// Button to hide the list
var btnHide = document.getElementById("hide");
btnHide.addEventListener("click", function() {
    document.getElementById("elenco").className = "hide";
});
