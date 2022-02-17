let checkButton = document.querySelector("#check");
let startButton = document.querySelector("#start");
let rightSide = document.querySelector(".right-img")
let leftSide = document.querySelector(".left-img")
let attempt = document.querySelector(".attempt")
let inputSection = document.querySelector(".input-section")
let secondImage = document.querySelector(".second")
let firstNumber = document.querySelector(".first-number")
let secondNumber = document.querySelector(".second-number")

let newText = document.querySelector(".footer--text-1")
let lastText = document.querySelector(".footer--text-2")
let myNumber = Math.floor(Math.random() * 100) + 1;

startButton.addEventListener ("click", ()=> {

    window.location.reload()

})


checkButton.addEventListener ("click", ()=> {

    let guessInput = document.querySelector("#guess").value;


    if (100 < guessInput || guessInput < 1 || isNaN(guessInput)) {

        newText.innerText = "You must enter 1 to 100!"
        attempt.innerText = Number(attempt.innerText)-1;
        setTimeout(()=> newText.innerText = "Write a Number.", 1500)


    }
    else if (attempt.innerText == 1) {

        attempt.innerText = Number(attempt.innerText)-1;

        newText.innerText = "";

        secondImage.innerHTML = "<img src='./images/gameover.png' alt='' class='center-img'>"

        inputSection.style.display ="none";

        setTimeout(()=> window.location.reload(), 3000)
 

    }
    else if(guessInput > myNumber) {


        if (Number(secondNumber.innerText) > Number(guessInput)) {
            secondNumber.innerText = guessInput
        };

        
        newText.innerText = `Less than ${guessInput}`

        rightSide.style.display = "flex";

        attempt.innerText = Number(attempt.innerText)-1;


        setTimeout(()=> newText.innerText = "Write a Number.", 1500)

        setTimeout(()=> rightSide.style.display = "none", 1500)

    }


    else if(guessInput < myNumber) {

        if (Number(firstNumber.innerText) < Number(guessInput)) {
            firstNumber.innerText = guessInput
        };


        newText.innerText = `Higher than ${guessInput}`

        leftSide.style.display = "flex";

        attempt.innerText = Number(attempt.innerText)-1;


        setTimeout(()=> newText.innerText = "Write a Number.", 1500)

        setTimeout(()=> leftSide.style.display = "none", 1500)
    }
    else if(guessInput == myNumber) {

        newText.innerText = "";

        secondImage.innerHTML = "<img src='./images/winner.png' alt='' class='center-img'>";

        lastText.innerHTML = `<p> It took you <span style='color:red'>(${ 11 - Number(attempt.innerText)})</span> \
         turn to guess my number, which was <span style='color:red'>(${myNumber})</span> </p>`;

        lastText.style.margin = "4rem";

        
    }
});



