const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passGen = document.getElementById("pass-Gen")
let passBox1 = document.getElementById("passBox-1")
let passBox2 = document.getElementById("passBox-2")
let randomPassword1 = ""
let randomPassword2 = ""

function generatePasswords() {
    let inputValue = document.getElementById("inputValue").value
    if (inputValue >= 8 && inputValue <= 18) {
        for (let i=0; i < inputValue; i++) {
            randomPassword1 += characters[Math.floor(Math.random() * characters.length)]
            randomPassword2 += characters[Math.floor(Math.random() * characters.length)]
            }
    }
    passBox1.textContent = randomPassword1
    passBox2.textContent = randomPassword2
    randomPassword1 = ""
    randomPassword2 = "" 
}

function copyPassword1() {
    let copyText = passBox1.textContent
    let inputElement = document.createElement('input')
    inputElement.setAttribute('value', copyText)
    document.body.appendChild(inputElement)
    inputElement.select()
    document.execCommand('copy')
    inputElement.parentNode.removeChild(inputElement)
}

function copyPassword2() {
    let copyText = passBox2.textContent
    let inputElement = document.createElement('input')
    inputElement.setAttribute('value', copyText)
    document.body.appendChild(inputElement)
    inputElement.select()
    document.execCommand('copy')
    inputElement.parentNode.removeChild(inputElement)
}