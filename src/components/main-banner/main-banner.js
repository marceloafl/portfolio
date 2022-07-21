import { button } from "../button/button.js";

export function mainBanner(){
    const wrapper = document.createElement('section');
    wrapper.classList.add('main-banner');
    wrapper.dataset.wrapper = 'main-banner';

    const imageWrapper = mainBannerImage();
    const textWrapper = mainBannerText();

    wrapper.appendChild(imageWrapper);
    wrapper.appendChild(textWrapper);

    return wrapper;
}

function mainBannerImage(){
    const imageWrapper = document.createElement('section');
    imageWrapper.classList = 'main-banner__image-wrapper';
    imageWrapper.dataset.about = 'image-wrapper';

    const image = document.createElement('img');
    image.src = '../../src/assets/images/profile-image/marcelo.png';
    image.alt = 'Marcelo Lemes'
    image.classList.add('main-banner__image');
    image.dataset.about = 'image';

    imageWrapper.appendChild(image);
    return imageWrapper;
}

function mainBannerText(){
    const textWrapper = document.createElement('section');
    textWrapper.classList = 'main-banner__text-wrapper';

    const title = mainBannerTitle();    
    const description = mainBannerDescription();    
    const mainBannerButton = button('Ver projetos', '../../../pages/projects/index.html', true);

    textWrapper.appendChild(title);
    textWrapper.appendChild(description);
    textWrapper.appendChild(mainBannerButton);

    return textWrapper;
}

function mainBannerTitle(){
    const title = document.createElement('h2');
    title.classList.add('main-banner__title');
    
    const titleDecorationLeft = document.createElement('span');
    titleDecorationLeft.classList.add('main-banner__title-decoration--left', 'material-symbols-outlined');
    
    const titleDecorationRight = document.createElement('span');
    titleDecorationRight.classList.add('main-banner__title-decoration--right', 'material-symbols-outlined');
    
    const titleText = document.createElement('span');
    titleText.textContent = 'Front-end';

    title.appendChild(titleDecorationLeft);
    title.appendChild(titleText);
    title.appendChild(titleDecorationRight);

    return title;
}

function mainBannerDescription(){
    const description = document.createElement('h3');
    description.classList.add('main-banner__description', 'main-banner__description--hide');
    description.dataset.about = 'description';
    description.textContent = 'Desenvolvo sites visualmente agradáveis e com a melhor usabilidade possível.'

    return description;
}




