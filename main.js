import { createSkills, handleArrows, automaticMoveSkills } from "./scripts/skills.js";
import { createHighlightedProjects } from "./scripts/projects.js";
import { effectTrigger, resetEffect } from "./scripts/about.js";

const aboutWrapper = document.querySelector('[data-about="wrapper"]');
const skillsSection = document.querySelector('[data-section="skills"]');
const arrows = document.querySelectorAll('[data-arrow]');

aboutWrapper.addEventListener('mouseover', effectTrigger);
aboutWrapper.addEventListener('mouseleave', resetEffect)

createSkills();
automaticMoveSkills();
createHighlightedProjects();

arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        handleArrows(arrow);
    });
});

skillsSection.addEventListener('mouseleave', automaticMoveSkills);





