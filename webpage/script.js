var registry = [];

function setDate() {
    let date = document.getElementById("datum");
    let today = new Date();

    let yyyy = today.getFullYear();
    let mm = today.getMonth().toString().padStart(2, '0');
    let dd = today.getDate().toString().padStart(2, '0');

    let dateString = [yyyy, mm, dd].join('-');
    date.value = dateString;
}

function appendList() {
    let name = document.getElementById("megnevezes");
    let kms = document.getElementById("kmallas");
    let date = document.getElementById("datum");
    
    registry.push({name: name.value, kms: kms.value, date: date.value});
    
    setListValue();
}

function setListValue() {
    let value = "";

    for (r of registry) {
        value += r.name + " - " + r.kms + "km - " + r.date + "\n";
    }

    document.getElementById("bejegyzes").value = value;
}

setDate();
let form = document.getElementById("form");
form.addEventListener("submit", appendList);