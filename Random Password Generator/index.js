const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
                    "S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j",
                    "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1",
                     "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^",
                     "&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


let password1 = ""
let password2 = ""
let btnOne = document.getElementById("btn-one")
let btnTwo = document.getElementById("btn-two")

function generate() {
    for(let i=0; i<16; i++){
        let randomPasswordOne = characters[Math.floor(Math.random() * characters.length)]
        password1 += randomPasswordOne 
        let randomPasswordTwo = characters[Math.floor(Math.random() * characters.length)]
        password2 += randomPasswordTwo
    }
    btnOne.textContent = password1
    btnTwo.textContent = password2
    password1 = ""
    password2 = ""
}
