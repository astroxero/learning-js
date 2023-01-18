var button = document.querySelector('button');
const celc = document.getElementById('tbuser');
const out1 = document.getElementById('output1');
let faren = 0;

function fub1() {
    faren = celc.value * (9/5) + 32;
    out1.innerHTML = faren + '°F';
}