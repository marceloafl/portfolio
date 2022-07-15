const skills = {
    html: {
        skill: 'html',
        img: 'html-logo.png'
    },
    css: {
        skill: 'css',
        img: 'css-logo.png'
    },
    javascript: {
        skill: 'javascript',
        img: 'javascript-logo.png'
    },
    react: {
        skill: 'react',
        img: 'react-logo.png'
    },
    git: {
        skill: 'git',
        img: 'git-logo.png'
    },
    github: {
        skill: 'github',
        img: 'github-logo.png'
    },
    /*setimo: {
        skill: 'setimo',
        img: 'github-logo.png'
    },*/
};

const skillsSection = document.querySelector('[data-section="skills"]');
const skillList = document.querySelector('[data-skills="list"]');
const url = '../assets/images/skills/';
const sliderTime = 3000;
let currentItem = 0;

export function createSkills(){
    for (const i in skills){    
        const skillItem = document.createElement('li');
        skillItem.classList.add('skill-item');    
        skillItem.dataset.skills="item";    
        
        const skillImage = document.createElement('img');
        skillImage.src = `${url}${skills[i].img}`;
        skillImage.classList.add('skill-img');
        
        const skillTitle = document.createElement('h4');
        skillTitle.textContent = skills[i].skill;
        skillTitle.classList.add('skill-title');
    
        skillItem.appendChild(skillImage);
        skillItem.appendChild(skillTitle);
    
        skillList.appendChild(skillItem);
    }
}

export function automaticMoveSkills(){
    const skillsElements = document.querySelectorAll('[data-skills="item"]');
    const itemsNumber = skillsElements.length;

    let interval = setInterval(() => {
        changeSkillToRight(itemsNumber);
    }, sliderTime);

    skillsSection.addEventListener('mouseover', () => {
        clearInterval(interval)
    })
}

export function handleArrows(arrow){
    const skillsElements = document.querySelectorAll('[data-skills="item"]');
    const itemsNumber = skillsElements.length;

    if (arrow.dataset.arrow === 'right'){
        changeSkillToRight(itemsNumber);
    }
    
    if (arrow.dataset.arrow === 'left'){
        changeSkillToLeft(itemsNumber);
    }        
}

function changeSkillToRight(itemsNumber){
    if(!isLastPosition(itemsNumber)){
        currentItem += 1;                
    } else {
        currentItem = 0;
    }
    
    showSelectedSkill(currentItem);
}

function changeSkillToLeft(itemsNumber){

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

    showSelectedSkill(currentItem);
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

function showSelectedSkill(currentItem){
    const skillsItem = document.querySelector('[data-skills="item"]');
    let itemWidth = skillsItem.offsetWidth;
        
    if (!isMobile()) {
        let sliderWidth = window.screen.width * 0.9;
        itemWidth = sliderWidth / 5;
    }

    skillList.scrollTo({
        top: 0,
        left: currentItem * itemWidth,
        behavior: "smooth",
    });
}