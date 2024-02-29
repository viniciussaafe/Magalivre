function feito() {
    alert("foi  aprovado")
}


let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function() {
    nextimage();
}, 5000)

function nextimage() {
    count++;
    if (count>4) {
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

function filtrar() {
    var input,
    iten,
    i,
    count2 = 0

    input = document.getElementById("filtro").value
    input = input.toLowerCase()

    iten  = document.getElementsByClassName("item")

    for (i = 0; i < iten.length; i++) {
        count2++
        if (!iten[i].innerHTML.toLowerCase().includes(input)) {
            iten[i].style.display = "none"
        }
        
        else {
            iten[i].style.display = "list-item"

        }
    }
}