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
    document.getElementById("position").innerHTML =
        surnameCap +
        " sei il numero " +
        (list.indexOf(surnameCap) + 1) +
        " della lista!";

    // Aggiunta alla str d'output
    for (var i = 0; i < list.length; i++) {
        items += "<li><span>" + list[i] + "</span></li>";
    }

    // output
    surnameList.innerHTML = items;

    // reset
    newSurname.value = "";
    newSurname.focus();
});
