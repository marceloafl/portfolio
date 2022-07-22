import { menuSocial } from "../menu-social/menu-social.js";
import { sectionTitle } from "../section-title/section-title.js";

export function contactSection(){
    const contactWrapper = document.createElement('section');
    contactWrapper.classList.add('contact');
    contactWrapper.id = 'contact';

    const formTitle = sectionTitle('Contato');

    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('content__wrapper');

    const form = document.createElement('form');
    form.classList.add('contact__form'); 
    form.action = "https://formsubmit.co/marceloaflemes@gmail.com";
    form.method = "POST";

    const nameInput = document.createElement('input');
    nameInput.classList.add('contact__input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.placeholder = 'Digite seu nome';
    nameInput.required = 'true';

    const setCaptchInput = document.createElement('input');
    setCaptchInput.type = 'hidden';
    setCaptchInput.name = '_captcha';
    setCaptchInput.value = 'false';

    const setConfirmInput = document.createElement('input');
    setConfirmInput.type = 'hidden';
    setConfirmInput.name = '_next';
    setConfirmInput.value = 'https://marceloafl.github.io/portfolio/index.html#contact';
    
    const emailInput = document.createElement('input');
    emailInput.classList.add('contact__input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = 'Digite seu e-mail';
    emailInput.required = 'true';
    
    const messageInput = document.createElement('textarea');
    messageInput.classList.add('contact__input', 'contact__input--textarea');
    messageInput.name = 'message';
    messageInput.placeholder = 'Digite sua mensagem';
    messageInput.required = 'true';

    const button = document.createElement('button');
    button.classList.add('form__button');
    button.type = 'submit';
    button.dataset.form = 'button';
    button.textContent = 'Enviar e-mail';

    const successMessage = document.createElement('p');
    successMessage.classList.add('contact__success-message', 'contact__success-message--hide');
    successMessage.textContent = 'Mensagem enviada com sucesso!';
    successMessage.dataset.form = 'success';

    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(messageInput);
    form.appendChild(setCaptchInput);
    form.appendChild(setConfirmInput);
    form.appendChild(button);
    form.appendChild(successMessage);

    const other = otherContact('Envie sua mensagem', 'marceloaflemes@gmail.com');

    contentWrapper.appendChild(other);
    contentWrapper.appendChild(form);

    contactWrapper.appendChild(formTitle);
    contactWrapper.appendChild(contentWrapper);

    return contactWrapper;
}

function otherContact(titleText, emailAddress){
    const wrapper = document.createElement('section');
    wrapper.classList.add('contact-other__wrapper');   

    const title = document.createElement('h5');
    title.classList.add('contact-other__title');
    title.textContent = titleText;

    const emailWrapper = document.createElement('div');
    emailWrapper.classList.add('contact-other__email-wrapper');

    const email = document.createElement('p');
    email.classList.add('contact-other__email');
    email.textContent = emailAddress;

    const emailIcon = document.createElement('span');
    emailIcon.classList.add('contact-other__email-icon', 'material-symbols-outlined')

    emailWrapper.appendChild(emailIcon);
    emailWrapper.appendChild(email);

    const social = menuSocial('preto', 'vertical', true, 'home');

    wrapper.appendChild(title);
    wrapper.appendChild(social);
    wrapper.appendChild(emailWrapper);

    return wrapper;
}

export function setSuccessMessageTime(button){
    button.addEventListener('click', () => {
        const time = Date.now();
        localStorage.setItem('contact-success', time);
    })
}

export function showSuccessMessage(){
    const successMessage = document.querySelector('[data-form="success"]');
    const lastSentForm = parseInt(localStorage.getItem('contact-success')); 
    const currentTime = Date.now();

    if(currentTime < lastSentForm + 10000){
        successMessage.classList.remove('contact__success-message--hide');
        setTimeout(() => {
            successMessage.classList.add('contact__success-message--hide');
        }, 5000);
    }
}