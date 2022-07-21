export function logo(text, secondaryText){
    const logoWrapper = document.createElement('a');
    logoWrapper.classList.add('logo__link');
    logoWrapper.target= "_self";
    logoWrapper.href="https://marceloafl.github.io/portfolio/index.html";    

    const mainTitle = document.createElement('h1');
    mainTitle.textContent = text;
    mainTitle.classList.add('logo__title')

    const secondaryTitle = document.createElement('h2');
    secondaryTitle.textContent = secondaryText;
    secondaryTitle.classList.add('logo__title--secondary');

    logoWrapper.appendChild(mainTitle);
    logoWrapper.appendChild(secondaryTitle);

    return logoWrapper;
}