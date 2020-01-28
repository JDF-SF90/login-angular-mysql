const express = require('express');
const morgan = require('morgan');

//bootstrap
const app = express();

//settings
app.set('port', process.env.PORT || 4000);

//middleware
app.use(morgan('dev'));

//global variables

//routes

//public files

//start the server
app.listen(app.get('port'), () => {
    console.log('Server on PORT ', app.get('port'));
});