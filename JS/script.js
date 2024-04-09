let count = 1;

document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage();
}, 5000);

function nextImage() {
    count++;
    if (count > 4) {
        count = 1; // Correção: atribuir o valor 1 para reiniciar o ciclo
    }

    document.getElementById("radio" + count).checked = true;
}
