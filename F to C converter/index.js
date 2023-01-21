var button = document.querySelector('button');
let change1 = document.querySelector('div');
const faren = document.getElementById('tbuser');
const out1 = document.getElementById('output1');
const cbox = document.querySelector('checkbox')
let celc = 0;
function fub1() {
    celc = (faren.value - 32) * (5/9);
    out1.innerHTML = celc + '°C';
    change1.style.background = 0,0,0;
}