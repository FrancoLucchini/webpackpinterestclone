const Img = require('../models/img');
const fsextra = require('fs-extra');
const path = require('path');

imgController = {}

imgController.index = async(req, res) => {
    const imgs = await Img.find({});
    res.json(imgs);
}
imgController.createImg = async(req, res) => {

    const img = new Img({
        title: req.body.title,
        description: req.body.description,
        path: '/img/' + req.file.filename
    });
    await img.save();
    res.json({message: 'Img created'});
}

imgController.deleteImg = async(req, res) => {
    const {id} = req.params
    const imageDeleted = await Img.findByIdAndRemove(id);
    await fsextra.unlink(path.resolve('./backend/src/public' + imageDeleted.path));

    res.json({message: 'Img deleted'});
}


module.exports = imgController;