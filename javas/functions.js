document.getElementById("noppa").addEventListener("click", heitto);

function heitto() {

    var numero = Math.floor(Math.random() * 6) + 1;

    var diceElement = document.getElementById("noppa");

    diceElement.innerHTML = `<img src="./kuvat/${numero}.png" />`;
}
