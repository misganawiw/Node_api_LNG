const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const adminRoutes = require('./routes/admin');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use((req,res,next) =>{
 res.status(404).send('<h1>Page not found</h1>');
})

app.get((req, res) => {
 res.send('Hello World');
 });











const port = 3000;

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});
