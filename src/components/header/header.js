import { menuSocial } from "../menu-social/menu-social.js";
import { logo } from "../logo/logo.js";
import { menuNav } from "../menu-nav/menu-nav.js";

const body = document.querySelector('[data-body]');

export function header(page){
    const headerWrapper = document.createElement('header');
    headerWrapper.classList.add('header');
    
    const headerLogo = logo('Marcelo Lemes', 'Desenvolvedor Front-end');
    const headerMenuSocial = menuSocial('white', 'horizontal', false, page);
    const headerMenuNav = menuNav();
    
    headerWrapper.appendChild(headerLogo);
    headerWrapper.appendChild(headerMenuNav);
    headerWrapper.appendChild(headerMenuSocial);
    
    body.appendChild(headerWrapper);
}




