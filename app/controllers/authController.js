'use strict';

var jwt = require('jsonwebtoken');
var    bCrypt = require('bcrypt');


var config = require('../config'),
    db = require('../services/database'),
    User = require('../models/user');

// The authentication controller.
var AuthController = {};

// Register a user.
AuthController.signUp = function(req, res)
{
    console.log(req.body.user);
    if(!req.body.user.id || !req.body.user.password) {
        res.json({ message: 'Please provide user id  and a password.' });
        res.json({ message: 'Please provide user id  and a password.' });
    } else {
        db.sync().then(function() 
        {
            req.body.user.role=config.userRoles.user;
            var newUser = req.body.user;
            return User.create(newUser).then(function()
            {
               console.log('Account created');
                res.status(201).json({ message: 'Account created!' });
            });
        }).catch(function(error) {
            console.log(error);
            res.status(403).json({ message: 'Username already exists!' });
        });
    }
}

// Authenticate a user.
AuthController.authenticateUser = function(req, res) {
    console.log(req.body.user);
    if(!req.body.user.id || !req.body.user.password) {
        console.log('needd');
        res.status(404).json({ message: 'Username and password are needed!' });
    } else {
        console.log(req.body.user.id);
        console.log(req.body.user.password);
        var id = req.body.user.id,
            password = req.body.user.password;
        //    potentialUser = { where: { username: username } };

        console.log('',id);
        User.findOne({where:{id: id}}).then(function(user)
        {
            if(!user)
            {
                console.log('auth failed');
                res.status(404).json({ message: 'Authentication failed!' });
            } else
            {
                /*bCrypt.hash('dila', 10, function(err, hash) {
                    if (err) { throw (err); }
                    console.log(user.password);
                    bCrypt.compare('dila', "$2a$10$SHSX0ckTEYa8Swd4sjM7KeBuYPIXDXQttUfNRGAvSvlDAyAHATiOm", function(err, result) {
                        if (err) { throw (err); }
                        console.log(result,'hi dila');
                    });});
*/
                comparePasswords(password,user.password,function(error, isMatch)
                {
                    console.log('error ',error);
                    console.log('error d',isMatch);
                    if(isMatch && !error)


                    {



console.log('password match');

                        var token = jwt.sign(
                            { id: user.id },
                            config.keys.secret,
                            { expiresIn: '30m' }
                        );

                        res.json({
                            success: true,
                            token: 'JWT ' + token,
                            role: user.role
                        });
                    } else {
                        res.status(404).json({ message: 'Login failed!' });
                    }
                });
            }
        }).catch(function(error)
        {
            console.log(error);
            res.status(500).json({ message: 'There was an error!' });
        });
    }







}

// Compares two passwords.
function comparePasswords(password, hash, callback)
{
    console.log('hello iam herer');
    bCrypt.compare(password, hash, function(error, isMatch) {
        if(error)
        {
            return callback(error);
        }

        return callback(null, isMatch);
    });
}

// Hashes the password for a user object.
function hashPassword(user) {
    if(user.changed('password')) {
        return bcrypt.hash(user.password, 10).then(function(password) {
            user.password = password;
        });
    }
}

module.exports = AuthController;
