import { header } from "../../src/components/header/header.js";
import { main } from "../../src/components/main-section/main-section.js";
import { footer } from "../../src/components/footer/footer.js";
import { listenProjectsElements } from "../../src/components/card-section/card-section.js";

header('projects');
main('projects');
footer('projects');

window.addEventListener('load', () => {
    listenProjectsElements();
})




