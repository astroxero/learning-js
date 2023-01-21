let button = document.querySelector('button');
let change1 = document.querySelector('div');
const innie = document.getElementById('tbuser');
const out1 = document.getElementById('output1');
const out2 = document.getElementById('output2');
const cbox = document.querySelector('checkbox')
let outie = 0;
let red;
let blue;
let green;
let ftoc = false;
let farenval = outie;

function convert1() {
    if (ftoc == false) {
        outie = innie.value * (9/5) + 32 ;
        out1.innerHTML = outie + '°F';

        red = Math.floor(outie / 100 * 255);
        blue = Math.floor((100 - outie)/100 * 255);
        green = Math.floor(((50 - Math.abs (50 - outie)) / 50) * 196);
    } else {
        outie = (innie.value - 32) * (5/9);
        out1.innerHTML = outie + '°C';

        red = Math.floor(innie.value / 100 * 255);
        blue = Math.floor((100 - innie.value)/100 * 255);
        green = Math.floor(((50 - Math.abs (50 - innie.value)) / 50) * 196);
    }
    
    change1.style.background = `rgb(${red}, ${green}, ${blue})`;
    innie.value = '';


    if (farenval < 10) {
        out2.innerHTML = 'Layer! Layer! Layer!'
    } else if (farenval >= 10 && farenval < 20) {
        out2.innerHTML = 'Really bundle up!'
    } else if (farenval >= 20 && farenval < 30) {
        out2.innerHTML = 'Wear a fleece, a jacket, and some gloves.'
    } else if (farenval >= 30 && farenval < 40) {
        out2.innerHTML = 'Wear a jacket,a fleece, and some gloves.'
    } else
}

function switch1() {
    if (ftoc == false) {
        ftoc = true
        farenval = innie.value;
        innie.placeholder = 'Enter Fahrenheit'
        innie.value = '';
        out1.innerHTML = null
    } else {
        ftoc = false
        farenval = outie;
        innie.placeholder = 'Enter Celcius'
        innie.value = '';
        out1.innerHTML = null
    }
}