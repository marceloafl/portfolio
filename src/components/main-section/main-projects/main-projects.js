import { cardSection } from "../../card-section/card-section.js";
import { tabBar } from "../../tab-bar/tab-bar.js";

export function projectsPage(page){
    const mainSection = document.createElement('main');
    mainSection.classList.add('main');
    mainSection.dataset.main;

    const projects = cardSection('Projetos', true, page);
    const tabBarElement = tabBar();

    mainSection.appendChild(projects);
    mainSection.appendChild(tabBarElement);

    return mainSection;
}
