var button = document.querySelector('button');
let change1 = document.querySelector('div');
const faren = document.getElementById('tbuser');
const out1 = document.getElementById('output1');
const cbox = document.querySelector('checkbox')
let celc = 0;
let red;
let blue;

function fub1() {
    celc = (faren.value - 32) * (5/9);
    out1.innerHTML = celc + '°C';

    red = Math.floor(faren.value / 100 * 255);
    blue = Math.floor((100 - faren.value)/100 * 255);
    change1.style.background = `rgb(${red}, ${0}, ${blue})`;
}