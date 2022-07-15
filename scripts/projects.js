import { projects } from "../projects/projectsList.js";

const url = '../assets/images/projetos-portfolio/';
const projectsListElement = document.querySelector('[data-projects="list"]');
const chosenProjects = ['Calculadora de Preços', 'Loja On-line', 'Cloneflix', 'Portfólio'];

export function createHighlightedProjects(){
    let highlightedProjects = new Object();
    for (const index in projects) {
        if (chosenProjects.includes(projects[index].title)){
            highlightedProjects[index] = projects[index];
        }
    }
    createProjects(highlightedProjects, listenProjectsElements);
}

export function createProjects(highlightedProjects, callback){
    for (const i in highlightedProjects){ 
        const projectCard = document.createElement('li');
        projectCard.classList.add('project-item');
        projectCard.dataset.project = 'card';
        
        const projectLink = document.createElement('a');
        projectLink.href = "../projectDetails/index.html";
        projectLink.classList.add('project-link');
        projectLink.dataset.project = 'link';
        projectLink.dataset.index = i;

        const projectTitleWrapper = document.createElement('section');
        projectTitleWrapper.classList.add('project-title-wrapper');

        const projectTitle = document.createElement('h4');
        projectTitle.classList.add('project-title');
        projectTitle.textContent = highlightedProjects[i].title;
        
        const projectDescriptionWrapper = document.createElement('section');
        projectDescriptionWrapper.classList.add('project-description-wrapper');

        const projecDescription = document.createElement('p');
        projecDescription.classList.add('project-description');
        projecDescription.textContent = highlightedProjects[i].resume;

        const projectLanguagesWrapper = document.createElement('section');
        projectLanguagesWrapper.classList.add('project-languages-wrapper');

        const projectLanguages = document.createElement('p');
        projectLanguages.classList.add('project-languages');
        projectLanguages.textContent = highlightedProjects[i].languages;

        const projectImageWrapper = document.createElement('section');
        projectImageWrapper.classList.add('project-image-wrapper');

        const projectImage = document.createElement('img');
        projectImage.classList.add('project-image');
        projectImage.src = `${url}${highlightedProjects[i].img_url}`;
        projectImage.alt = highlightedProjects[i].name;

        const projectButton = document.createElement('a');
        projectButton.classList.add('project-button');
        projectButton.textContent = 'Ver projeto';
        projectButton.href = "../projectDetails/index.html";
        projectButton.dataset.project = 'link';
        projectButton.dataset.index = i;

        const projectButtonDecoration = document.createElement('span');
        projectButtonDecoration.classList.add('projects-button-icon', 'material-symbols-outlined');

        projectTitleWrapper.appendChild(projectTitle);
        projectDescriptionWrapper.appendChild(projecDescription);
        projectLanguagesWrapper.appendChild(projectLanguages);
        projectImageWrapper.appendChild(projectImage);

        projectButton.appendChild(projectButtonDecoration);

        projectLink.appendChild(projectTitleWrapper);
        projectLink.appendChild(projectDescriptionWrapper);
        projectLink.appendChild(projectLanguagesWrapper);
        projectLink.appendChild(projectImageWrapper);
        
        projectCard.appendChild(projectLink);
        projectCard.appendChild(projectButton);       
    
        projectsListElement.appendChild(projectCard);

    }
    callback();
}

function listenProjectsElements(){
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




