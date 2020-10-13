const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
// const { session } = require('passport');
const key = require('../../config/keys').secret;
const User = require('../../model/Users');

// Route POST api/users/register
router.post('/register', (req, res) => {
  const {
    // eslint-disable-next-line camelcase
    name, username, email, password, confirm_password,
  } = req.body;
  // eslint-disable-next-line camelcase
  if (password !== confirm_password) {
    flag = true;
    return res.status(400).json({
      success: false,
      msg: 'Password do not match ',
    });
  }
  // Check for Unique Username
  User.findOne({
    username,
  }).then((user) => {
    if (user) {
      return res.status(400).json({
        success: false,
        msg: 'User already Exist ',
      });
    }
  });
  // Check for the Unique Email
  User.findOne({
    email,
  }).then((user) => {
    if (user) {
      return res.status(400).json({
        success: false,
        msg: 'Email already Exist ',
      });
    }
  });

  //  The Data is valid and now we can register

  const newUser = new User({
    name,
    username,
    password,
    email,
  });

  // Generate salt for password
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (er, hash) => {
      if (er) {
        throw er;
      } else {
        newUser.password = hash;
        newUser.save().then((user) => res.status(200).json({
          success: true,
          msg: 'User is now Registered',
        }));
      }
    });
  });
});

// Route POST Login

router.post('/login', (req, res) => {
  try {
    User.findOne(
      {
        username: req.body.username,
      },
    ).then((user) => {
      if (!user) {
        return res.status(404).json({
          msg: 'User is Not Found',
          success: false,
        });
      }
      // If the is User then Compare Password

      bcrypt.compare(req.body.password, user.password).then((isMatch) => {
        if (isMatch) {
          // User's Password is Correct and send JSON Token
          const payload = {
            // eslint-disable-next-line no-underscore-dangle
            _id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
          };
          jwt.sign(payload, key,
            {
              expiresIn: 604800,
            }, (err, token) => {
              res.status(200).json({
                success: true,
                user,
                msg: 'Successfully Signed the token',
                token: `Bearer ${token}`,
              });
            });
        } else {
          return res.status(400).json({
            msg: 'Inccorrect Password',
            success: false,
          });
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
});

router.get('/profile', passport.authenticate('jwt', {
  session: false,
}),
(req, res) => {
  res.json({
    user: req.user,
  });
});

module.exports = router;
