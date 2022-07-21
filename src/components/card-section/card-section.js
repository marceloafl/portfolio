import { projects } from "../../../pages/projects/projects-list.js";
import { button } from "../button/button.js";
import { sectionTitle } from "../section-title/section-title.js";

const url = 'src/assets/images/projects-portfolio/';
const chosenProjects = ['Calculadora de Preços', 'Loja On-line', 'Cloneflix', 'Portfólio'];

export function cardSection(sectionName, allProjects, page){
    const cardSection = document.createElement('section');
    cardSection.classList.add('card-section');

    const cardSectionTitle = sectionTitle(sectionName);

    const cardSectionList = document.createElement('ul');
    cardSectionList.classList.add('card-section__list');
    cardSectionList.dataset.projects = 'list';

    const seeAllCards = button('Ver todos os projetos', 'pages/projects/index.html', false);

    cardSection.appendChild(cardSectionTitle);
    cardSection.appendChild(cardSectionList);

    if (!allProjects){
        cardSection.appendChild(seeAllCards);
        createHighlightedProjects(cardSectionList, page);
    } else {
        createProjects(cardSectionList, projects, page);
    }

    
    return cardSection;
}

function createHighlightedProjects(list, page){
    let highlightedProjects = new Object();
    for (const index in projects) {
        if (chosenProjects.includes(projects[index].title)){
            highlightedProjects[index] = projects[index];
        }
    }
    createProjects(list, highlightedProjects, page);
}

function createProjects(list, highlightedProjects, page){
    for (const i in highlightedProjects){ 
        const projectCard = document.createElement('li');
        projectCard.classList.add('card-section__item');
        projectCard.dataset.project = 'card';
        
        const projectLink = document.createElement('a');
        projectLink.href = "https://marceloafl.github.io/portfolio/pages/project-details/index.html";
        projectLink.classList.add('card-section__item-link');
        projectLink.dataset.project = 'link';
        projectLink.dataset.index = i;

        const projectTitleWrapper = document.createElement('section');
        projectTitleWrapper.classList.add('card-section__item-title-wrapper');

        const projectTitle = document.createElement('h4');
        projectTitle.classList.add('card-section__item-title');
        projectTitle.textContent = highlightedProjects[i].title;
        
        const projectDescriptionWrapper = document.createElement('section');
        projectDescriptionWrapper.classList.add('card-section__item-description-wrapper');

        const projecDescription = document.createElement('p');
        projecDescription.classList.add('card-section__item-description');
        projecDescription.textContent = highlightedProjects[i].resume;

        const projectLanguagesWrapper = document.createElement('section');
        projectLanguagesWrapper.classList.add('card-section__item-languages-wrapper');

        const projectLanguages = document.createElement('p');
        projectLanguages.classList.add('card-section__item-languages');
        projectLanguages.textContent = highlightedProjects[i].languages;

        const projectImageWrapper = document.createElement('section');
        projectImageWrapper.classList.add('card-section__item-image-wrapper');

        const projectImage = document.createElement('img');
        projectImage.classList.add('card-section__item-image');
        if (page === 'home'){
            projectImage.src = `${url}${highlightedProjects[i].img_url}`;
        } else {
            projectImage.src = `../../${url}${highlightedProjects[i].img_url}`;
        }
        projectImage.alt = highlightedProjects[i].name;

        const projectButton = button('Ver projeto', '/pages/project-details/index.html', false);
        projectButton.dataset.index = i;
        projectButton.dataset.project = 'link';

        projectTitleWrapper.appendChild(projectTitle);
        projectDescriptionWrapper.appendChild(projecDescription);
        projectLanguagesWrapper.appendChild(projectLanguages);
        projectImageWrapper.appendChild(projectImage);

        projectLink.appendChild(projectTitleWrapper);
        projectLink.appendChild(projectDescriptionWrapper);
        projectLink.appendChild(projectLanguagesWrapper);
        projectLink.appendChild(projectImageWrapper);
        
        projectCard.appendChild(projectLink);
        projectCard.appendChild(projectButton);      
    
        list.appendChild(projectCard);
    }
}

export function listenProjectsElements(){
    const projectsElements = document.querySelectorAll('[data-project="link"]');
    setChosenProject(projectsElements);
}

function setChosenProject(projectsElements){
    projectsElements.forEach(project => {
        project.addEventListener('click', () => {
            const chosenProject = project.dataset.index
            setLocalStorage(chosenProject);
        })
    })
}

function setLocalStorage(chosenProject){
    localStorage.getItem('chosenProject');
    localStorage.setItem('chosenProject', chosenProject);
}

