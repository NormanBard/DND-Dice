let x = rollTwenty

function rollTwenty() {
    return Math.floor(Math.random() * 20) + 1;
}
function rollTweleve() {
    return Math.floor(Math.random() * 12) + 1;
}
function rollTen() {
    return Math.floor(Math.random() * 10) + 1;
}
function rollEight() {
    return Math.floor(Math.random() * 8) + 1;
}
function rollSix() {
    return Math.floor(Math.random() * 6) + 1;
}
function rollFour() {
    return Math.floor(Math.random() * 4) + 1;
}


document.getElementById("d20").onclick = () => {
    document.getElementById("d20results").innerHTML = (rollTwenty());
}
document.getElementById("d12").onclick = () => {
    document.getElementById("d12results").innerHTML = (rollTweleve());
}
document.getElementById("d10").onclick = () => {
    document.getElementById("d10results").innerHTML = (rollTen());
}
document.getElementById("d8").onclick = () => {
    document.getElementById("d8results").innerHTML = (rollEight());
}
document.getElementById("d6").onclick = () => {
    document.getElementById("d6results").innerHTML = (rollSix());
}
document.getElementById("d4").onclick = () => {
    document.getElementById("d4results").innerHTML = (rollFour());
}


//document.getElementById("d20").onclick = function () {
  //  x = Math.floor(Math.random() * 20) + 1;

    //document.getElementById("d20results").innerHTML = x;




