// The User model.
'use strict'; 

var Sequelize = require('sequelize'),
 DataTypes = require('sequelize'),

    bcrypt = require('bcrypt');

var config = require('../config'),
    db = require('../services/database');

// 1: The model schema.
var modelDefinition = {
    id: {
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull: false
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false
    },

    organization:
    {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: "organization", key: "id" }, //by default primary key is taken id
        onDelete: "cascade"
    },
    role:
    {
        type: Sequelize.INTEGER,
        defaultValue: config.userRoles.user
    },
    email:
    {
        type: Sequelize.STRING,
        isEmail: true,
        unique:true

    },

        f_name:
        {
            type: DataTypes.STRING,
            required: true
        },

        m_name:
        {
            type: DataTypes.STRING,
        },

        l_name:
        {
            type: DataTypes.STRING,
            required: true
        }

    ,

        updated_at:  DataTypes.DATE,
        deleted_at: DataTypes.DATE,
        created_at: DataTypes.DATE,
    desc:DataTypes.TEXT


    };

// 2: The model options.
var modelOptions = {
    instanceMethods: {
        comparePasswords: comparePasswords
    },
    hooks: {
        beforeValidate: hashPassword
    },
    underscored: true,//underscored: true indicates the the column names of the database tables are snake_case rather than camelCase.
    freezeTableName: true // to remove default append "s" in table name

};

// 3: Define the User model.
var UserModel = db.define('user', modelDefinition, modelOptions);

// Compares two passwords.
function comparePasswords(password, callback)
{
console.log('hello iam herer');
    bcrypt.compare(password, this.password, function(error, isMatch) {
        if(error) {
            return callback(error);
        }

        return callback(null, isMatch);
    });
}

// Hashes the password for a user object.
function hashPassword(user) {
    if(user.changed('password')) {
        return bcrypt.hash(user.password, 10).then(function(password)
        {
            user.password = password;
        });
    }
}

module.exports = UserModel;