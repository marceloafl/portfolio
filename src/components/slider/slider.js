import { sectionTitle } from "../section-title/section-title.js";
import { skills } from "./slider-list.js";
import { automaticMoveSlider, handleArrows } from "./slider-transition.js";

const url = 'src/assets/images/skills/';

export function slider(sliderName){
    const slider = document.createElement('section');
    slider.classList.add('slider-section');
    slider.dataset.section = 'skills';

    const title = sectionTitle(sliderName);

    const sliderWrapper = document.createElement('section');
    sliderWrapper.classList.add('slider__wrapper');
    sliderWrapper.dataset.section = 'skills';

    const buttonLeft = document.createElement('button');
    buttonLeft.classList.add('slider__arrow', 'slider__arrow--left', 'material-symbols-outlined');
    buttonLeft.dataset.arrow = 'left';

    const list = document.createElement('ul');
    list.classList.add('slider__list');
    list.dataset.skills = 'list';

    const buttonRight = document.createElement('button');
    buttonRight.classList.add('slider__arrow', 'slider__arrow--right', 'material-symbols-outlined');
    buttonRight.dataset.arrow = 'right';

    sliderWrapper.appendChild(buttonLeft);
    sliderWrapper.appendChild(list);
    sliderWrapper.appendChild(buttonRight);

    slider.appendChild(title);
    slider.appendChild(sliderWrapper);

    sliderItem(list, slider);
    listenArrows(slider);

    return slider;
    
}

function sliderItem(list, slider){
    let sliderElements = [];

    for (const i in skills){    
        const sliderItem = document.createElement('li');
        sliderItem.classList.add('slider__item');    
        sliderItem.dataset.skills="item";
        sliderElements.push(sliderItem);  
        
        const sliderImage = document.createElement('img');
        sliderImage.src = `${url}${skills[i].img}`;
        sliderImage.classList.add('slider__image');
        
        const sliderTitle = document.createElement('h4');
        sliderTitle.textContent = skills[i].skill;
        sliderTitle.classList.add('slider__title');
    
        sliderItem.appendChild(sliderImage);
        sliderItem.appendChild(sliderTitle);
    
        list.appendChild(sliderItem);
    }
    automaticMoveSlider(sliderElements, slider);
}

function listenArrows(slider){
    const arrows = slider.querySelectorAll('[data-arrow]');
    
    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            handleArrows(arrow)
        })
    });
}


