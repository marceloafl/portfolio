import { contactSuccess } from "./main-contact-success/main-contact-success.js";
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
            const homeMain = homePage();
            body.appendChild(homeMain);
            break;
        case 'projects':
            const projectMain = projectsPage();
            body.appendChild(projectMain);
            break;
        case 'project-details':
            const projectDetailsMain = projectDetailsPage();
            body.appendChild(projectDetailsMain);
            break;
        case 'contact-success':
            const contactSuccessMain = contactSuccess();
            body.appendChild(contactSuccessMain);
            break;
        default:
            console.log('deu erro')
    }
    
}



