import { projects } from "../projects/projectsList.js";

const projectDetailsPage = document.querySelector('[data-wrapper="project-details"]');
const chosenProject = localStorage.getItem('chosenProject');
const url = '../assets/images/projetos-portfolio/';

function getProject(){
    for (let index in projects){
        if (index === chosenProject){
            const project = projects[index];
            createProjectDetailsPage(project);
        }
    }
}

getProject();

function createProjectDetailsPage(project){
    const mainBanner = createProjectDetailsMainBanner(project);
    const contentWrapper = createProjectDetailsContent(project);
    const backButton = createBackButton();

    projectDetailsPage.appendChild(mainBanner);
    projectDetailsPage.appendChild(contentWrapper);
    projectDetailsPage.appendChild(backButton);
}

// MAIN BANNER

function createProjectDetailsMainBanner(project){
    const mainBannerWrapper = createMainBannerWrapper();

    const mainBannerTextWrapper = createMainBannerTextWrapper(project);
    const mainBannerImageWrapper = createMainBannerImageWrapper(project);

    mainBannerWrapper.appendChild(mainBannerTextWrapper);
    mainBannerWrapper.appendChild(mainBannerImageWrapper);

    return mainBannerWrapper;
}

function createMainBannerWrapper(){
    const mainBannerWrapper = document.createElement('section');
    mainBannerWrapper.classList.add('project-details__intro-wrapper');
    return mainBannerWrapper;
}

// BANNER TEXT WRAPPER

function createMainBannerTextWrapper(project){
    const mainBannerTextWrapper = document.createElement('section');
    mainBannerTextWrapper.classList.add('project-details__intro-wrapper--text');

    const projectTitle = createProjectTitle(project);
    const projectTitleDescription = createProjectTitleDescription(project);    
    const projectTitleButton = createProjectTitleButton(project);

    mainBannerTextWrapper.appendChild(projectTitle);
    mainBannerTextWrapper.appendChild(projectTitleDescription);
    mainBannerTextWrapper.appendChild(projectTitleButton);
    
    return mainBannerTextWrapper;
}

function createProjectTitle(project){
    const projectTitle = document.createElement('h3');
    projectTitle.classList.add('project-details__title');
    projectTitle.textContent = project['title'];
    return projectTitle;
}

function createProjectTitleDescription(project){
    const projectTitleDescription = document.createElement('p');
    projectTitleDescription.classList.add('project-details__description');
    projectTitleDescription.textContent = project['resume'];
    return projectTitleDescription;
}

function createProjectTitleButton(project){
    const projectTitleButtonIcon = document.createElement('spam');
    projectTitleButtonIcon.classList.add('project-detail__button-icon', 'material-symbols-outlined');
    
    const projectTitleButton = document.createElement('a');
    projectTitleButton.classList.add('project-details__button');
    projectTitleButton.textContent = 'Ver site do projeto';
    projectTitleButton.href = project['project_url'];
    projectTitleButton.target = '_blank';

    projectTitleButton.appendChild(projectTitleButtonIcon);
    return projectTitleButton;
}

// BANNER IMAGE WRAPPER

function createMainBannerImageWrapper(project){
    const mainBannerImageWrapper = document.createElement('section');
    mainBannerImageWrapper.classList.add('project-details__intro-wrapper--image');

    const mainBannerImage = createMainBannerImage(project);
    mainBannerImageWrapper.appendChild(mainBannerImage);

    return mainBannerImageWrapper;
}

function createMainBannerImage(project){
    const mainBannerImage = document.createElement('img');
    mainBannerImage.classList.add('project-details__image');
    mainBannerImage.alt = project['title'];
    mainBannerImage.src = `${url}${project['img_url']}`;
    return mainBannerImage;
}

// BANNER DETAILS CONTENT

function createProjectDetailsContent(project){
    const contentWrapper = document.createElement('section');
    contentWrapper.classList.add('project-details__content-wrapper');

    const sectionWrapperA = createProjectDetailsSection(project, 'text', 'O desafio');
    const sectionWrapperB = createProjectDetailsSection(project, 'text', 'A solução');
    const sectionWrapperC = createProjectDetailsSection(project, 'list', 'Tecnologias utilizadas');

    contentWrapper.appendChild(sectionWrapperA);
    contentWrapper.appendChild(sectionWrapperB);
    contentWrapper.appendChild(sectionWrapperC);

    return contentWrapper;
}

function createProjectDetailsSection(project, type, title){
    const sectionWrapper = createSectionWrapper();
    const sectionTitle = createSectionTitle(title);    
    const sectionContent = createContent(project, type, title);

    sectionWrapper.appendChild(sectionTitle);
    sectionWrapper.appendChild(sectionContent);

    return sectionWrapper;
}

function createSectionWrapper(){
    const sectionWrapper = document.createElement('section');
    sectionWrapper.classList.add('project-details__section-wrapper');
    return sectionWrapper;
}

function createSectionTitle(title){
    const projectSectionTitle = document.createElement('h4');
    projectSectionTitle.classList.add('project-details__section-title');
    projectSectionTitle.textContent = title;
    return projectSectionTitle;
}

function createContent(project, type, title){
    let sectionContent;
    switch(type){
        case('list'):
            return sectionContent = createListSection(project);
        default:
            return sectionContent = createTextSection(project, title);
    }
}

function createTextSection(project, title){
    const projectSectionText = document.createElement('p');
    projectSectionText.classList.add('project-details__section-text');

    switch(title){
        case('O desafio'):
            projectSectionText.textContent = project['challenge'];
            return projectSectionText;
        default:
            projectSectionText.textContent = project['resolution'];
            return projectSectionText;
    }
}

function createListSection(project){
    const projectSectionList = document.createElement('ul');
    projectSectionList.classList.add('project-details__section-list');
    
    project['languages'].forEach(item => {
        const projectSectionItem = document.createElement('li');
        projectSectionItem.textContent = item;
        projectSectionList.appendChild(projectSectionItem);
    });

    return projectSectionList;
}

function createBackButton(){    
    const projectBackButton = document.createElement('a');
    projectBackButton.textContent = 'Voltar para os projetos';
    projectBackButton.classList.add('project-details__button--back');
    projectBackButton.href = '../projects/index.html';
    projectBackButton.target = '_self';

    return projectBackButton;
}
