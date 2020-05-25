class ImgServices{
    
    constructor(){
        this.URI = '/img';
    }

    async getImgs(){
        const res = await fetch(this.URI);
        const imgs = await res.json();
        return imgs;
    }

    async postImg(img){
        const res = await fetch(this.URI, {
            method: 'POST',
            body: img,
        });

        const data = await res.json();
        console.log(data);
    }

    async deleteImg(id){
        const res = await fetch(`${this.URI}/${id}`, {
            headers: {
                'Content-Type': 'application/json' 
            },
            method: 'DELETE'
        });
        const data = await res.json()
        console.log(data);
    }
}

export default ImgServices;