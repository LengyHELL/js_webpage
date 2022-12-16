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

setDate();