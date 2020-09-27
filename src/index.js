/*eslint-env es6*/
/*Base Dependencies*/
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan')
const bodyParser = require("body-parser");
const port = process.env.PORT || 4567;

/*Project Dependencies*/
const passportJWT = require('../src/middlewares/passportJWT')();
const errorHandler = require('./middlewares/errorHandler');
const placeRoutes = require('./routes/place');
const authRoutes = require('./routes/auth');

/*Connection Mongo Atlas*/
const uri ='mongodb+srv://Thierry:TDCharlie51@cluster0.6weoz.azure.mongodb.net/sample_airbnb?retryWrites=true&w=majority';
mongoose.Promise = global.Promise;
mongoose.connect(uri, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
 })
 .then(() => console.log("Mongo DB is OK!"))
 .catch((err) => console.log(err));

/*app*/
app.use(cors())
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
        extended: true
    }));
app.use(morgan('combined'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passportJWT.intialize());
app.use(errorHandler);
app.set('view engine', "pug");
app.set('views', "./views");

/*Routes*/
app.use("/api/auth", passportJWT.authenticate(), authRoutes);
app.use("/api/places", placeRoutes);

/*get*/
app.get('/api', function (req, res) {
  res.send('hello, world!')
})
app.get("*",(req,res) => {
  res.render("404")
})
/*listen*/
app.listen(port, () => console.log(`[🚧 server is running on ${port}]`));

