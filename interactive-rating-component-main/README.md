# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./README_files/rate_us_screenshot.png)
![](./README_files/thankyou_screenshot.png)

### Links

- [Live Site via Vercel](https://interactive-rating-component-alpha-eight.vercel.app/)

## My process

### Built with

- jQuery
- Flexbox
- Google Fonts
- CSS Class Lists

### What I learned

By far the biggest challenge for me, as someone who has mostly been using React to code, was to use the DOM in JavaScript to manipulate HTML directly. For example, take a look at the code below:

```
const page = document.querySelector(".page");
const ratingCard = page.querySelector("#ratingCard");
const thankYouCard = page.querySelector("#thankYouCard");
const form = ratingCard.querySelector("#rateUs");
const buttonDiv = form.querySelector("#buttons");
const buttons = buttonDiv.querySelectorAll(".rating");
const ratingSentence = thankYouCard.querySelector(".ratingSentence");
```

It took me forever to realize why I was unable to select the buttons -- and it had to do with child components. After I figured that out, I just needed to reference [Mozilla's documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) to understand how to properly make queries.

In addition, hiding components is a lot harder than in React, in my opinion. Whereas you can directly manipulate the return value in React, you need to know how to use style properties when using JS directly.

```
if(currentRating != 0){
        ratingCard.style.display = "none";
        thankYouCard.style.display = "block";
        ratingSentence.innerText = `You selected ${currentRating} out of 5`
    }
```

Here you can see that I needed to set the ratingCard's display to none. If it was set to visibility = "hidden", its height would remain, leaving an odd blank spot.

For the same reason, I had to do display = "block". This makes the once hidden (via CSS) thankYouCard to be present, as a block element.

Another hurdle I came across was how to add and remove classes from an element. In my case, I wanted to track which button was selected, and I did that by adding the ".selected" class.

This is how I managed to do that:
```
const currentSelected = buttonDiv.querySelector(".selected");
    if(currentSelected){
        currentSelected.classList.remove("selected");
    }
    if(!currentSelected || currentSelected.id != this.id){
        this.classList.add("selected");
    }
    currentRating = this.value;
```

In this case, we remove the selected modifier from the currently selected button (if it exists) and then add the selected class if it is not the same button that was just selected.

### Continued development

I feel like it may be nice to create this in the form of a React App. If I ever feel like revisiting this challenge, I may decide to go that route. It just seems like React has so many tools that will ultimately simplify the process, and allow for easier integration into a fully developed website.

### Useful resources

- [Document.querySelector() - Web APIs | MDN](https://www.example.com)

As mentioned earlier, this is what helped me understand how to properly use querySelector(). It has both good examples and some good explanation (e.g. that it finds direct children).

- [CSS Display Property](https://www.w3schools.com/cssref/pr_class_display.php)

This was where I learned about how the display property works in CSS. It provided good visual examples as well as good code examples.

- [Elements.classList - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

This was useful for how to add and remove classes, because that is how I tracked which button was selected or not.

## Author

- GitHub - [jwilson10](https://github.com/jwilson10)
- Frontend Mentor - [@jwilson10](https://www.frontendmentor.io/profile/jwilson10)