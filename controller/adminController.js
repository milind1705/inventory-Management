const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.signup = (req, res) => {
    const {name, email, mobile, password} = req.body;

    if(!name || !email || !mobile || !password){
        return res.status(400).json({
            message: "All fields are mandetory"
        })
    }

    Admin.findOne({email:email}).then((user) => {
        if(user){
            return res.status(400).json("User is alredy register with this emailId")
        }
          // create hash password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            if(err){
                throw err;
            }

            //save the userr
            const newAdmin = new Admin({name:name, email:email, mobile:mobile, password:hash});

            newAdmin
            .save()
            .then((user) => {
                return res.status(200).json(user);
            })
            .catch((err) => {
                return res.status(400).json({
                    message: err.message|| "something went wrong"
                })
            })
        })
    
    })
    })
  
}
//login

module.exports.login = (req, res) => {
    const {email, password} = req.body;
    
    if(!email || !password){
        return res.status(400).json({
            message: "All fields are mandetory"
        })
    }

    Admin.findOne({email:email}).then((user) => {
        if(!user){
            return res.status(400).json("User is not registered with this emailId")
        }
        //password validation
        bcrypt.compare(password, user.password).then((isMatch) => {
            if(!isMatch){
                return res.status(400).json("Password is incorrect")
            }
            
            // jwt sign
            jwt.sign( {id: user._id}, process.env.JWT_SECRET, {expiresIn:3600},(err, token) => {
                if(err) throw err;
                return res.status(200).json({
                    message: {token:token, name:user.name, email:user.email}
                })
            })
         })

    })


}