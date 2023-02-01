const corB = document.getElementById('corry')
const inB = document.getElementById('inny')

inB.onclick = function incorrectSwitch() {
    console.log('coorectumundo!')
    window.location.href = "../ITab/index.html"
}
corB.onclick = function correctSwitch() {
    console.log('coorectumundo!')
    window.location.href = "./CTab/index.html"
}

