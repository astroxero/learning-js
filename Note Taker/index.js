let b = document.getElementById('comuner')
let i = document.getElementById('noteInput')

function commitTheNote() {
    if (i.value != "") {
    let newDiv = document.createElement("div")
    let newButton = document.createElement("button")
    newButton.innerText = 'X'
    newButton.className = "padme"
    newDiv.className = "padme"
    newDiv.innerHTML = i.value;
    document.body.appendChild(newDiv)
    document.body.appendChild(newButton)
    i.value = "";
    newButton.onclick = function deleteNewDiv() {
        document.body.removeChild(newDiv)
        document.body.removeChild(newButton)
    }
    }
}
