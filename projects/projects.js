import { projects } from "./projectsList.js";

const url = '../assets/images/projetos-portfolio/';
const projectsList = document.querySelector('[data-projects="list"]');

window.addEventListener('load', createProjects(listenProjectsElements));

function createProjects(callback){
    for (const i in projects){

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
        projectTitle.textContent = projects[i].title;

        const projectDescriptionWrapper = document.createElement('section');
        projectDescriptionWrapper.classList.add('project-description-wrapper');

        const projecDescription = document.createElement('p');
        projecDescription.classList.add('project-description');
        projecDescription.textContent = projects[i].resume;

        const projectLanguagesWrapper = document.createElement('section');
        projectLanguagesWrapper.classList.add('project-languages-wrapper');

        const projectLanguages = document.createElement('p');
        projectLanguages.classList.add('project-languages');
        projectLanguages.textContent = projects[i].languages;

        const projectImageWrapper = document.createElement('section');
        projectImageWrapper.classList.add('project-image-wrapper');

        const projectImage = document.createElement('img');
        projectImage.classList.add('project-image');
        projectImage.src = `${url}${projects[i].img_url}`;
        projectImage.alt = projects[i].name;

        const projectButton = document.createElement('a');
        projectButton.classList.add('project-button');
        projectButton.textContent = 'Ver detalhes';
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
    
        projectsList.appendChild(projectCard);
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




