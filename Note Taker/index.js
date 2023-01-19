let b = document.getElementById('comuner')
let i = document.getElementById('noteInput')

function commitTheNote() {
    let newDiv = document.createElement("div")
    let newButton = document.createElement("button")
    newButton.innerText = 'X'
    newDiv.innerHTML = i.value;
    document.body.appendChild(newDiv)
    document.body.appendChild(newButton)
    newButton.onclick = function deleteNewDiv() {
        document.body.removeChild(newDiv)
        document.body.removeChild(newButton)
        i.value = null
    }
}
