const corry = document.getElementsByClassName('correct')
const inky = document.getElementsByClassName('incorrect')

corry.onclick = function switchCorrect() {
    console.log('Correctomundo!')
    window.location.href = 'CorrectTab/index.html'
}
inky.onclick = function switchInCorrect() {
    console.log('Nopesies!')
    window.location.href = 'InTab/index.html'
}