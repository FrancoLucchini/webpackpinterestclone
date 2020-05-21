import './styles/styles.css'

import UI from './UI'


document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    ui.renderImgs();
})

document.getElementById('form').addEventListener('submit', e => {
    const title = document.getElementById('title').value;
    const image = document.getElementById('image').files;
    const description = document.getElementById('description').value;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image[0]);
    
    const ui = new UI();
    ui.addNewImg(formData);

    ui.renderMessage('New image added', 'success', 3000);

    e.preventDefault();
});

document.getElementById('container')
    .addEventListener('click', e => {
        if(e.target.classList.contains('delete')){
            const ui = new UI()
            ui.deleteImg(e.target.getAttribute('_id'));
            ui.renderMessage('Image deleted', 'danger', 3000);
        }
        e.preventDefault();
    });