/**
 * Created by oa on 7/30/2017.
 */
// The User model.
'use strict';

var DataTypes = require('sequelize');
var config = require('../config'),
    db = require('../services/database');


    var organizaton = db.define('organization',
        {
            id:
            {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            name:
            {
                type: DataTypes.STRING,
                allowNull: false
            },
            active:
            {
              type:DataTypes.BOOLEAN,
              default:false
            },

            email:
            {
                type: DataTypes.STRING,
                unique:true
            },
            address:
            {
                type: DataTypes.TEXT
            },
            city:
            {
                type: DataTypes.STRING
            },
            state:
            {
                type: DataTypes.STRING
            },
            postal_code:
            {
                type: DataTypes.STRING
            },
            desc:
            {
                type: DataTypes.TEXT
            },
            updated_at:  DataTypes.DATE,
            deleted_at: DataTypes.DATE,
            created_at: DataTypes.DATE},

        {
            underscored: true,//underscored: true indicates the the column names of the database tables are snake_case rather than camelCase.
            freezeTableName: true // to remove default append "s" in table name

        }

        //freeze database name or s is appended
    );

module.exports=organizaton;