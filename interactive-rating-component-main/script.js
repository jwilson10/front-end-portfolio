const ratingCard = document.querySelector("#ratingCard");
const thankYouCard = document.querySelector("#thankYouCard");
const form = ratingCard.querySelector("#rateUs");
const buttonDiv = form.querySelector("#buttons");
const buttons = buttonDiv.querySelectorAll(".rating");

function buttonClick(){
    const currentSelected = buttonDiv.querySelector(".selected");
    if(currentSelected){
        currentSelected.classList.remove("selected");
    }
    if(!currentSelected || currentSelected.id != this.id){
        this.classList.add("selected");
    }
}


for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonClick);
}