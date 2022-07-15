const aboutImageWrapper = document.querySelector('[data-about="image-wrapper"]');
const aboutImage = document.querySelector('[data-about="image"]');
const aboutDescription = document.querySelector('[data-about="description"]');
const aboutButton = document.querySelector('[data-about="button"]');

export function effectTrigger(){
    aboutImageWrapper.classList.add('about-image__wrapper--translate');
    aboutImage.classList.add('about-photo--translate');
    aboutDescription.classList.remove('description--hide');
    aboutButton.classList.remove('invisible');
}

export function resetEffect(){
    aboutImageWrapper.classList.remove('about-image__wrapper--translate');
    aboutImage.classList.remove('about-photo--translate');
    aboutDescription.classList.add('description--hide');
    aboutButton.classList.add('invisible');
}