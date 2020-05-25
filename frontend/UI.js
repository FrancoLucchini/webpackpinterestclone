import ImgServices from './services/imgServices';
import {
    format
} from 'timeago.js';

const imgServices = new ImgServices();

class UI {

    async renderImgs() {
        const imgs = await imgServices.getImgs();
        const imgsCard = document.getElementById('gallery');
        imgsCard.innerHTML = '';
        imgs.forEach(img => {
            const div = document.createElement('div');
            div.classList.add('gallery-item');
            div.innerHTML = `
                <img src="${img.path}">
            `
            imgsCard.appendChild(div);
        });
    }

    async addNewImg(img) {
        await imgServices.postImg(img);
        this.clearImgForm();
        this.renderImgs();
    }

    clearImgForm() {
        document.getElementById('form').reset();
    }

    renderMessage(message, colorMessage, secondsToRemove) {
        const div = document.createElement('div');
        div.className = `alert alert-${colorMessage} message`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.col-md-6');
        const card = document.querySelector('.card');

        container.insertBefore(div, card);
        setTimeout(() => {
            document.querySelector('.message').remove();
        }, secondsToRemove);

    }

    async deleteImg(id) {
        await imgServices.deleteImg(id);
        this.renderImgs();
    }

    mansonryLayout(containerElem, itemsElems, columns) {
        containerElem.classList.add('masonry-layout', `columns-${columns}`)
        let columnsElements = [];

        for (let i = 1; i <= columns; i++) {
            let column = document.createElement('div');
            column.classList.add('masonry-column', `column-${i}`);
            containerElem.appendChild(column);
            columnsElements.push(column);
        }

        for (let m = 0; m < Math.ceil(itemsElems.length / columns); m++) {
            for (let n = 0; n < columns; n++) {
                if (columnsElements[n]) {
                    let item = itemsElems[m * columns + n]
                    columnsElements[n].appendChild(item);
                    item.classList.add('masonry-item');
                }
            }
        }
    }
}





export default UI;