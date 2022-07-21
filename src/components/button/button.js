export function button (textContent, href, hide){
    const buttonWrapper = document.createElement('a');
    buttonWrapper.target = '_self';
    buttonWrapper.classList.add('button-wrapper');
    buttonWrapper.dataset.button;
    buttonWrapper.href = href;
    
    if (hide ===  true) {
        buttonWrapper.classList.add('button--hide');
    }
    
    const button = document.createElement('button');
    button.textContent = textContent;
    button.classList.add('button')

    buttonWrapper.appendChild(button);

    return buttonWrapper;
}

export function buttonBack(textContent, href, hide){
    const buttonWrapper = document.createElement('a');
    buttonWrapper.target = '_self';
    buttonWrapper.classList.add('button-wrapper');
    buttonWrapper.dataset.button;
    buttonWrapper.href = href;
    
    if (hide ===  true) {
        buttonWrapper.classList.add('button--hide');
    }
    
    
    const button = document.createElement('button');
    button.textContent = textContent;
    button.classList.add('button')
    button.classList.add('button--back')

    buttonWrapper.appendChild(button);

    return buttonWrapper;
}