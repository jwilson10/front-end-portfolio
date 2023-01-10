const countryPrompt = document.querySelector(".country");
const form = document.querySelector(".countryForm");
const guess = form.querySelector("#capitalGuess");
const afterSubmit = document.querySelector(".afterSubmit");
const gameCounter = afterSubmit.querySelector(".gameCounter");
const rightWrong = afterSubmit.querySelector(".rightWrong");
const answer = afterSubmit.querySelector(".answer");
const goAgain = afterSubmit.querySelector("#goAgain");

let games = 0;
let wins = 0;

const apiFetch = async () =>{
    try {
        const res = await fetch(`https://restcountries.com/v2/all?fields=name,capital`);
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
    country = countries[currCountryIndex];
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


