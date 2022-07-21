import { tabBarItems } from "./tab-bar-items.js";

export function tabBar(){
    const wrapper = document.createElement('aside');
    wrapper.classList.add('tab-bar');

    for (let index in tabBarItems){
        const tabBarLink = document.createElement('a');
        tabBarLink.classList.add('tab-bar__item');
        tabBarLink.target= '_self';
        tabBarLink.href= tabBarItems[index].href;

        const tabBarText = document.createElement('p');
        tabBarText.classList.add('tab-bar__text');
        tabBarText.textContent = tabBarItems[index].text;

        const tabBarIcon = document.createElement('span');
        tabBarIcon.classList.add('tab-bar__icon', 'material-symbols-outlined');
        tabBarIcon.classList.add(`tab-bar__icon--${index}`);

        tabBarLink.appendChild(tabBarIcon);
        tabBarLink.appendChild(tabBarText);

        wrapper.appendChild(tabBarLink);
    }
   
    return wrapper;
}


