const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup", (req, res, next) => {
    User.find({ email: req.body.email })
    .exec()
    .then(user => {
        if (user.length >= 1) {
            return res.status(422).json({
                message: "Email already exists"
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                  return res.status(500).json({
                    error: err,
                  });
                } else {
                  const user = new User({
                    _id: new mongoose.Types.ObjectId(),
                    email: req.body.email,
                    password: hash,
                  });
                  user
                  .save()
                  .then(result => {
                      console.log(result);
                      res.status(201).json({
                          message: "User created successfully."
                      });
                  })
                  .catch(err => {
                      console.log(err);
                      res.status(500).json({
                          error: err
                      })
                  });
                }
            });
        }
    });

});





const userLogin =  (req, res, next) => {
    User.findOne({ email: req.body.email })
    .exec()
    .then(user => {
        if(user.length < 1) {
            return res.status(401).json({
                message: "Auth failed"
            });
        }
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            if(result) {
                const token = jwt.sign({
                    email: user.email,
                    userId: user._id

                }, process.env.JWT_KEY, 
                {
                    expiresIn: "21d"
                });
               return res.status(200).json({
                   message: "Auth successful",
                   token: token
               }); 
            }
            res.status(401).json({
                message: "Auth failed"
            });
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
};






module.exports = {
    userLogin
};