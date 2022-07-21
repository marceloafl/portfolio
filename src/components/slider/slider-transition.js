import { skills } from "./slider-list.js";

const url = 'assets/images/skills/';
const sliderTime = 2000;
let currentItem = 0;

export function createSlider(){
    for (const i in skills){    
        const sliderItem = document.createElement('li');
        sliderItem.classList.add('skill-item');    
        sliderItem.dataset.skills="item";    
        
        const sliderImage = document.createElement('img');
        sliderImage.src = `${url}${skills[i].img}`;
        sliderImage.classList.add('skill-img');
        
        const sliderTitle = document.createElement('h4');
        sliderTitle.textContent = skills[i].skill;
        sliderTitle.classList.add('skill-title');
    
        sliderItem.appendChild(sliderImage);
        sliderItem.appendChild(skillTitle);
    }
}

export function automaticMoveSlider(sliderElements, slider){
    const itemsNumber = sliderElements.length;

    let interval = setInterval(() => {
        moveSliderToRight(itemsNumber);
    }, sliderTime);

    slider.addEventListener('mouseover', () => {
        clearInterval(interval)
    })
}


export function handleArrows(target){
    const sliderElements = document.querySelectorAll('[data-skills="item"]');
    const itemsNumber = sliderElements.length;

    if (target.dataset.arrow === 'right'){
        moveSliderToRight(itemsNumber);
    }
    
    if (target.dataset.arrow === 'left'){
        moveSliderToLeft(itemsNumber);
    }        
}

function moveSliderToRight(itemsNumber){
    if(!isLastPosition(itemsNumber)){
        currentItem += 1;                
    } else {
        currentItem = 0;
    }
    
    showSelectedItem(currentItem);
}

function moveSliderToLeft(itemsNumber){

    if (!isFirstPosition()){
        currentItem -= 1;
    } else {
        if(!isMobile()){
            if(isOdd(itemsNumber)) {
                currentItem = 2;
            } else {
                currentItem = 1;
            }
        } else {
            currentItem = itemsNumber - 1;
        }
    }    

    showSelectedItem(currentItem);
}

function isFirstPosition(){
    if (currentItem <= 0){
        return true;
    }
    return false;
}

function isLastPosition(itemsNumber){
    if (!isMobile()){
        if (currentItem >= itemsNumber - 5){
            return true;
        }
        return false;
    }

    if (currentItem === itemsNumber - 1){
        return true;
    }
    return false;
}

function isMobile(){
    if (window.screen.width > 768){
        return false;
    }
    return true;
}

function isOdd (itemsNumber){
    if (itemsNumber % 2 === 0){
        return false;
    }
    return true;
}

function showSelectedItem(currentItem){
    const sliderList = document.querySelector('[data-skills="list"]');
    const sliderItem = document.querySelector('[data-skills="item"]');
    let itemWidth = sliderItem.offsetWidth;
        
    if (!isMobile()) {
        let sliderWidth = window.screen.width * 0.9;
        itemWidth = sliderWidth / 5;
    }

    sliderList.scrollTo({
        top: 0,
        left: currentItem * itemWidth,
        behavior: "smooth",
    });
}