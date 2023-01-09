const page = document.querySelector(".page");
const ratingCard = page.querySelector("#ratingCard");
const thankYouCard = page.querySelector("#thankYouCard");
const form = ratingCard.querySelector("#rateUs");
const buttonDiv = form.querySelector("#buttons");
const buttons = buttonDiv.querySelectorAll(".rating");
const ratingSentence = thankYouCard.querySelector(".ratingSentence");

let currentRating = 0;

function buttonClick(){
    const currentSelected = buttonDiv.querySelector(".selected");
    if(currentSelected){
        currentSelected.classList.remove("selected");
    }
    if(!currentSelected || currentSelected.id != this.id){
        this.classList.add("selected");
    }
    currentRating = this.value;
}


for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonClick);
}

form.addEventListener("submit", (evt) =>{
    evt.preventDefault();

    if(currentRating != 0){
        ratingCard.style.display = "none";
        thankYouCard.style.display = "block";
        ratingSentence.innerText = `You selected ${currentRating} out of 5`
    }
});