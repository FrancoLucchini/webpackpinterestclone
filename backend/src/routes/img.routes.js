const {Router} = require('express');
const router = Router();

const {index, createImg, deleteImg} = require('../controllers/img.controller');


router.get('/', index);
router.post('/', createImg);
router.delete('/:id', deleteImg);

module.exports = router;

