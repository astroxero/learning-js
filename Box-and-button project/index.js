var button = document.querySelector('button');
const faren = document.getElementById('tbuser');
const out1 = document.getElementById('output1');
const cbox = document.querySelector('checkbox')
let celc = 0;
function fub1() {
    celc = (faren.value - 32) * (5/9);
    out1.innerHTML = celc + '°C';
}