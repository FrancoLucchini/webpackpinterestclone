import './styles/styles.sass'

import UI from './UI'


document.addEventListener('DOMContentLoaded', async() => {
    const ui = new UI();
    await ui.renderImgs();
    await ui.mansonryLayout(document.getElementById('gallery'), document.querySelectorAll('.gallery-item'), 3);
})


document.getElementById('form').addEventListener('submit', e => {
    const image = document.getElementById('image').files;
    const formData = new FormData();
    formData.append('image', image[0]);
 
    const ui = new UI();
    ui.addNewImg(formData);
    ui.renderMessage('New image added', 'success', 3000);
    e.preventDefault();
});







