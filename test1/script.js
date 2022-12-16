var result = 0;

function tableCreate() {
    let table = document.getElementsByTagName('table')[0];
    table.style.borderCollapse = "collapse"

    let tbody = document.createElement('tbody');

    let day = 2;

    for (let i = 0; i <= 12; i++) {
        let row = document.createElement('tr');

        let jLength = 32;
        if (i == 2) {
            jLength = 28;
        } else if (i % 2 === 0 && i <= 7) {
            jLength = 30;
        } else if (i % 2 === 1 && i > 7) {
            jLength = 30;
        }

        for (let j = 0; j < 32; j++) {
            let cell = document.createElement('td');

            if (i != 0 && j != 0) {
                cell.style.width = "1cm";
                cell.style.height = "1cm";
                cell.style.border = "1px solid black";
                
                cell.addEventListener("click", setCell);

                if (j > jLength) {
                    cell.style.background = "grey";
                } else if (day % 7 === 6 || day % 7 === 0) {
                    cell.style.backgroundColor = "blue";
                    day++;
                } else {
                    cell.style.backgroundColor = "red";
                    day++;
                }

            } else if (i == 0) {
                cell = document.createElement('th');
                cell.style.width = "1cm";
                cell.style.height = "1cm";
                cell.style.border = "1px solid black";
                cell.innerHTML = j.toString();
            } else if (j == 0) {
                cell = document.createElement('th');
                cell.style.width = "1cm";
                cell.style.height = "1cm";
                cell.style.border = "1px solid black";
                cell.innerHTML = i.toString();
            }

            row.appendChild(cell);
        }

        tbody.appendChild(row);
    }

    table.appendChild(tbody);
}

function setCell(event) {
    let cell = event.target;

    if (cell.style.backgroundColor === "red") {
        cell.style.backgroundColor = "green";
        result++;
    }
    else if (cell.style.backgroundColor === "green") {
        cell.style.backgroundColor = "red";
        result--;
    }

    if (result < 0) {
        result = 0;
    }

    document.getElementsByClassName('result')[0].innerHTML = result.toString();
};

tableCreate();