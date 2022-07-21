let headerMenuList = [];

export function menuNav(){
    createMenuNavItem('Início', 'https://marceloafl.github.io/portfolio/index.html');
    createMenuNavItem('Projetos', 'https://marceloafl.github.io/portfolio/pages/projects/index.html');
    createMenuNavItem('Contato', 'https://marceloafl.github.io/portfolio/index.html#contact');

    const menuList = document.createElement('ul');
    menuList.classList.add('menu-nav');

    headerMenuList.forEach(item => {
        menuList.appendChild(item);
    })
    return menuList;
}

function createMenuNavItem(menuTitle, url){
    const menuItem = document.createElement('li');
    menuItem.classList.add('menu-nav__item');

    const itemLink = document.createElement('a');
    itemLink.classList.add('menu-nav__item-link');
    itemLink.target = '_self';
    itemLink.textContent = menuTitle;
    itemLink.href = url;

    menuItem.appendChild(itemLink);
    headerMenuList.push(menuItem);
}


