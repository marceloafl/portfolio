import { cardSection } from "../../card-section/card-section.js";
import { contactSection } from "../../contact-section/contact-section.js";
import { mainBanner } from "../../main-banner/main-banner.js";
import { slider } from "../../slider/slider.js";
import { tabBar } from "../../tab-bar/tab-bar.js";

export function homePage(page){
    const mainSection = document.createElement('main');
    mainSection.classList.add('main');
    mainSection.dataset.main;

    const mainBannerElement = mainBanner();
    const sliderElement = slider('Skills');
    const cardSectionElement = cardSection('Projetos', false, page);
    const contactElement = contactSection('Contato');
    const tabBarElement = tabBar();

    mainSection.appendChild(mainBannerElement);
    mainSection.appendChild(sliderElement);
    mainSection.appendChild(cardSectionElement);
    mainSection.appendChild(contactElement);
    mainSection.appendChild(tabBarElement);

    return mainSection;
}




