const card = document.querySelector(".card");
const flagDiv = card.querySelector(".flagDiv");
const flag = card.querySelector("#flag");
const countryPrompt = card.querySelector(".country");
const form = card.querySelector(".countryForm");
const formContent = form.querySelector(".formContents");
const guess = formContent.querySelector("#capitalGuess");
const afterSubmit = card.querySelector(".afterSubmit");
const gameCounter = afterSubmit.querySelector(".gameCounter");
const rightWrong = afterSubmit.querySelector(".rightWrong");
const answer = afterSubmit.querySelector(".answer");
const goAgain = afterSubmit.querySelector("#goAgain");

let games = 0;
let wins = 0;

const apiFetch = async () =>{
    try {
        const res = await fetch(`https://restcountries.com/v2/all?fields=name,capital,flags`);
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

let country = {};

const setCountry = async () =>{
    const countries = await apiFetch();
    let currCountryIndex = Math.floor(Math.random() * countries.length) + 1;
    countryPrompt.innerText = `What is the capital of ${countries[currCountryIndex].name}?`
    flag.src = countries[currCountryIndex].flags.svg;
    flag.alt = `Flag of ${countries[currCountryIndex].name}`;
    country = countries[currCountryIndex];
    console.log(country.capital);
};

setCountry();

const check = (evt) =>{
    afterSubmit.style.display = "block";
    evt.preventDefault();
    games++;
    if(country.capital === capitalGuess.value){
        wins++;
        rightWrong.innerText = `Correct! The capital of ${country.name} is ${country.capital}.`
    } else{
        rightWrong.innerText = `Incorrect. The capital of ${country.name} is ${country.capital}.`
    }
    gameCounter.innerHTML = `Games: ${games}<br>Wins: ${wins}`
};

form.addEventListener("submit", check);

const handleGoAgain = () =>{
    afterSubmit.style.display = "none";

    setCountry();
}

goAgain.addEventListener("click", handleGoAgain);


