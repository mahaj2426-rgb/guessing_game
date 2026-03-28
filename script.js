/*
function start(){
    let rndm = Math.floor(Math.random()*10)+1
    console.log(rndm)
    let num = Number(prompt("enter a number: "))
   
    let count = 0
    while(count < 3){
        if(num == rndm){
            alert("congratulations, it's a match")
            start_again()
            return
        }
        else if(num > rndm){
            num = prompt("guess lower")
        }input.addEventListener('keydown', (e) => {
        else if(num<rndm){
           num = prompt("guess higher")
        }
        
        count++
    }
    if(num != rndm){
        alert("sorry! out of guesses")
    }
    start_again()
}

function start_again(){
    let again = prompt("wanna start again? ")
    again = again.toLowerCase()
    if(again == 'yes' || again == ' '){
        start()
    }
    else{
        alert("let's meet next time")
    }
}

start()
*/


function start(){
    let rndm = Math.floor(Math.random()*10)+1
    console.log(rndm)
    let count = 0
    let input = document.querySelector('#input')
    let guessBox = document.querySelector("#real")
    let hint = document.querySelector("#hint")
    let realNo = document.querySelector("#real_no")
    let yn = document.querySelector("#yn")
    let gameOver = false
    
    input.addEventListener('keydown',function handler(e) {
        if(e.key === 'Enter'){

            if(gameOver == true){
                input.removeEventListener("keydown", handler)
                start_again()
                return
            }

            let num = Number(input.value)
            
            
            if(num == rndm){
                hint.innerText = "Congratulations! It's a match"
                realNo.innerText = rndm
                gameOver = true

            }
            else if(num>rndm){
                hint.innerText = "Guess lower"
            }
            else if(num<rndm){
                hint.innerText = "Guess higher"
            }
            count++
            input.value = ''

            if(count == 3 && num != rndm){
                hint.innerText = "Sorry! Out of guesses"
                realNo.innerText = ''
                gameOver = true          
            }

        }
    })


}

function start_again(){
    let hint = document.querySelector("#hint")
    let yn = document.querySelector("#yn")
    let input = document.querySelector("#input")

    hint.innerText = "Wanna Start again?"

    yn.innerHTML = `<button id="yes" class="option">Yes</button> 
    <button id="no" class="option">No</button>`

    let yes = document.querySelector("#yes")
    let no = document.querySelector("#no")
    let guessBox = document.querySelector("#real")

    yes.addEventListener("click", () =>{
        location.reload()
    })
    no.addEventListener("click", () =>{
        guessBox.innerHTML = "<h3>Let's meet again! Mate</h3>"
    })
}


start()







