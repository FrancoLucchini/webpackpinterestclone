import ImgServices from './services/imgServices';
import {format} from 'timeago.js';

const imgServices = new ImgServices();

class UI{

    async renderImgs(){
        const imgs = await imgServices.getImgs();
        const imgsCard = document.getElementById('container');
        imgsCard.innerHTML = '';
        imgs.forEach(img => {
            const div = document.createElement('div');
            div.className = '';
            div.innerHTML = `
            <div class="box animate__animated animate__fadeInDown">
            <img src="${img.path}" alt="">
            <h2>${img.title}</h2>
            <p>${img.description}</p>
        </div>
            `
            imgsCard.appendChild(div);
        });
    }

    async addNewImg(img){
        await imgServices.postImg(img);       
        this.clearImgForm();
        this.renderImgs();
    }

    clearImgForm(){
        document.getElementById('form').reset();
    }

    renderMessage(message, colorMessage, secondsToRemove){
        const div = document.createElement('div');
        div.className = `alert alert-${colorMessage} message`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.col-md-4');
        const imgForm = document.querySelector('#img-form');

        container.insertBefore(div, imgForm);
        setTimeout(() => {
            document.querySelector('.message').remove();
        }, secondsToRemove);
        
    }

    async deleteImg(id){
        await imgServices.deleteImg(id);
        this.renderImgs();
    }
}


export default UI;