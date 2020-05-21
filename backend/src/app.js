if(process.env.NODE_ENV === 'development'){
    require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

//Initializations
const app = express();


//settings
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img'),
    filename(req, file, cb){
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

app.use(multer({storage}).single('image'));

//routes
app.use('/img', require('./routes/img.routes'));

module.exports = app;