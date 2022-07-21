export function sectionTitle(textTitle){
    const title = document.createElement('h3');
    title.classList.add('section-title');
    title.textContent = textTitle;
    
    return title;
}