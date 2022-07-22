import { header } from "./src/components/header/header.js";
import { main } from "./src/components/main-section/main-section.js";
import { footer } from "./src/components/footer/footer.js";
import { automaticMoveSlider } from "./src/components/slider/slider-transition.js";
import { listenProjectsElements } from "./src/components/card-section/card-section.js";
import { setSuccessMessageTime, showSuccessMessage } from "./src/components/contact-section/contact-section.js";

header('home');
main('home');
footer('home');

window.addEventListener('mouseover', event => {
    const target = event.target;
    const sliderElements = document.querySelectorAll('[data-skills="item"]');

    if (target.dataset.section === 'skills'){
        automaticMoveSlider(sliderElements, target);
    }
});

window.addEventListener('load', () => {
    listenProjectsElements();
    showSuccessMessage();
});

window.addEventListener('click', event => {
    const target = event.target;
    if (target.dataset.form = 'button'){
        setSuccessMessageTime(target);
    }
})





