import { socialNetworks } from "./social-networks-list.js";

export function menuSocial(color, direction, showName, page){
    const socialList = document.createElement('ul');
    socialList.classList.add('menu-social__list');
    
    if (direction === 'vertical'){
        socialList.classList.add('menu-social__list--vertical');
    }

    let menuItems = [];
   
    for (let index in socialNetworks){
        let image_icon = socialNetworks[index].img_url;
        let page_url = '../../' + socialNetworks[index].page_url;
        
        if(color === 'white'){
            image_icon = socialNetworks[index].img_url_white;
        }

        if (page === 'home'){
            page_url = 'socialNetworks[index].page_url';
        }

        const name = socialNetworks[index].name;
        const img_url = image_icon;
        
        const socialLink = createSocialMenuItem(page_url, img_url, name, direction, showName);
        menuItems.push(socialLink);
    }

    menuItems.forEach(item => {
        socialList.appendChild(item);
    })
    
    return socialList;   
}

function createSocialMenuItem(page_url, img_url, name, direction, showName){
    const menuItem = document.createElement('li');
    menuItem.classList.add('menu-social__item');

    const itemLink = document.createElement('a');
    itemLink.classList.add('menu-social__item-link')
    itemLink.href = page_url;
    itemLink.target = 'blank';

    if(direction === 'vertical'){
        itemLink.classList.add('menu-social__item-link--vertical')
    }

    const itemLinkIcon = document.createElement('img');
    itemLinkIcon.src = img_url;
    itemLinkIcon.alt = `Ir para o ${name}`;
    itemLinkIcon.classList.add('menu-social__item-image');

    const itemName = document.createElement('p');
    itemName.classList.add('menu-social__item-name');
    itemName.textContent = name;

    itemLink.appendChild(itemLinkIcon);
    menuItem.appendChild(itemLink);

    if (showName){
        itemLink.appendChild(itemName);
    }
    
    return menuItem;
}

