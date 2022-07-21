import { menuSocial } from "../menu-social/menu-social.js";

const body = document.querySelector('[data-body]');

export function footer(page){
    const footerWrapper = document.createElement('footer');
    footerWrapper.classList.add('footer');

    const footerContactWrapper = contactWrapper(page);
    const footerCopyright = copyright('Criado por Marcelo Lemes | 2022');

    footerWrapper.appendChild(footerContactWrapper);
    footerWrapper.appendChild(footerCopyright);

    body.appendChild(footerWrapper);
}

function contactWrapper(page){
    const contactWrapper = document.createElement('section');
    contactWrapper.classList.add('footer__contact-wrapper');

    const footerMenuSocial = menuSocial('white', 'horizontal', false, page);
    const footerEmail = contactEmail('marceloaflemes@gmail.com');

    contactWrapper.appendChild(footerMenuSocial);
    contactWrapper.appendChild(footerEmail);

    return contactWrapper;
}

function contactEmail(emailAddress){
    const email = document.createElement('p');
    email.classList.add('footer__contact-email');
    email.textContent = emailAddress;
    return email;
}

function copyright(text){
    const footerCopyright = document.createElement('p');
    footerCopyright.classList.add('footer__copyrigth');
    footerCopyright.textContent = text;
    return footerCopyright;
}



