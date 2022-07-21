import { buttonBack } from '../../button/button.js';

export function contactSuccess(){
    const mainSection = document.createElement('main');
    mainSection.classList.add('success-main');
    mainSection.dataset.main;

    const title = document.createElement('h4');
    title.classList.add('contact-success__title');
    title.textContent = 'Mensagem enviada com sucesso';

    const buttonElement = buttonBack('Voltar', '/index.html', false);

    mainSection.appendChild(title);
    mainSection.appendChild(buttonElement);

    return mainSection;
}
