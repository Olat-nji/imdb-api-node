const express = require('express');
const movie =require('./api/movie');

const app = express();
const logger =(req, res, next) => {
    console.log('Api endpoint '+req.originalUrl+" rendered");
    next();
};
app.use(logger);
app.get('/', function(req, res){
    res.send('Hello Blob ');
});
app.get('/api/movie', function(req, res){
    res.send(movie);
});
const port=process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Server started on port ${port}`));