const countryPrompt = document.querySelector(".country");
const form = document.querySelector(".countryForm");
const guess = form.querySelector("#capitalGuess");
const gameCounter = document.querySelector(".gameCounter");
const rightWrong = document.querySelector(".rightWrong");
const answer = document.querySelector(".answer");
const goAgain = document.querySelector("#goAgain");

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

const setCountry = async () =>{
    const countries = await apiFetch();
    let currCountryIndex = Math.floor(Math.random() * countries.length) + 1;
    countryPrompt.innerText = `What is the capital of ${countries[currCountryIndex].name}?`
    return countries[currCountryIndex];
};

let country = setCountry();

const check = (evt) =>{
    evt.preventDefault();
    games++;
    if(country.capital === capitalGuess.value){
        wins++;
        rightWrong.innerText = `Correct! The capital of ${country} is ${country.capital}.`
    } else{
        rightWrong.innerText = `Incorrect. The capital of ${country} is ${country.capital}.`
    }
    gameCounter.innerHTML = `Total number of games played: ${games}<br>Wins: ${wins}`
    goAgain.style.display = "block";
};

form.addEventListener("submit", check);


