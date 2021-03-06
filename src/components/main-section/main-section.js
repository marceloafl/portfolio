import { homePage } from "./main-home/main-home.js";
import { projectDetailsPage } from "./main-project-details/main-project-details.js";
import { projectsPage } from "./main-projects/main-projects.js";

export function main(page){
    const body = document.querySelector('[data-body]');

    const mainSection = document.createElement('main');
    mainSection.classList.add('main');
    mainSection.dataset.main;

    switch(page) {
        case 'home':
            const homeMain = homePage(page);
            body.appendChild(homeMain);
            break;
        case 'projects':
            const projectMain = projectsPage(page);
            body.appendChild(projectMain);
            break;
        case 'project-details':
            const projectDetailsMain = projectDetailsPage();
            body.appendChild(projectDetailsMain);
            break;
        default:
            console.log('deu erro')
    }
    
}



