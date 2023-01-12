# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

## Screenshot

![](./screenshot.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

I learned a lot about responsive design, as I hadn't implemented it in a project since it was introduced in our bootcamp. For instance, the css media block was new to me.

```
@media screen and (max-width: 500px){
.card{
        flex-direction: column;
        height: 800px;
    }

    .title{
        font-size: 26px;
    }

    .flavorText{
        font-size:12px;
    }

    .photo, .contentSection{
        width: 100%;
        height:50%;
    }

    .photo{
        background-image: url(images/image-product-mobile.jpg) no-repeat center;
        background-size: cover;
        width: 100%;
        height:50%;
    }
}
```

I had created it with desktop in mind, changed the viewport on my browser to a mobile phone, and marveled at how broken it looked. 

My solution to it was to add the following:

```
.card{
        flex-direction: column;
        height: 800px;
    }
```

Otherwise, the card div would just stick to a relative size of the viewport. 800px seemed to be the fair height for showing everything required.

### Continued development

I think that I want to learn more industry standards for scaling and responsive design. I intend to look into that more with both Udemy courses and other online resources that I can find.

## Author

- GitHub - [@jwilson10](https://github.com/jwilson10)
- Frontend Mentor - [@jwilson10](https://www.frontendmentor.io/profile/jwilson10)


## Acknowledgments

This would not have been possible without my instructor, Irina Cudo, with Dev10. She assigned this and also provided troubleshooting help as well as pointers for what she would do.