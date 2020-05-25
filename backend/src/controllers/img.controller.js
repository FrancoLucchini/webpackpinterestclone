const Img = require('../models/img');
const fs = require('fs-extra');
const path = require('path');

const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: process.env.CLOUD,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET_KEY
});

imgController = {}

imgController.index = async(req, res) => {
    const imgs = await Img.find({});
    res.json(imgs);
}
imgController.createImg = async(req, res) => {

    const {url} = await cloudinary.v2.uploader.upload(req.file.path);     
    const img = new Img();
    img.path = url;

    await fs.unlink(req.file.path);
    await img.save();
    res.json({message: 'Img created'});
}

imgController.deleteImg = async(req, res) => {
    const {id} = req.params
    const imageDeleted = await Img.findByIdAndRemove(id);

    res.json({message: 'Img deleted'});
}


module.exports = imgController;