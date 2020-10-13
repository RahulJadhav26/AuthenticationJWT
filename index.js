const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const cors = require('cors');

// Initialize app
const app = express();

// Middlewares
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
require('./config/passport')(passport);

// Setting Static Directory
app.use(express.static(path.join(__dirname, 'public')));

// Import DB config

const db = require('./config/keys');

mongoose.connect(db.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Database sucessfully connected ${db.mongoURI}`);
}).catch((err) => {
  console.log(`Unable to connect to Database ERROR : ${err}`);
});

// Require all the Routes
const users = require('./routes/api/users');

app.use('/api/users', users);

app.get('*', (res, req) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
