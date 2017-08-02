/**
 * Created by oa on 5/16/2017.
 */
'use strict'
/*
user can create many company but all has to be distinct from each other
primary key will be user_id plus company_name*/
var DataTypes = require('sequelize');
var config = require('../config'),
    db = require('../services/database');



    var Company = db.define('company',
        {
        id:
        {
            type: DataTypes.STRING,
            primaryKey: true
        },
        user_id:
        {
            type: DataTypes.STRING,
            references: { model: "user", key: "id" },
            onDelete: "cascade",
            allowNull: false
        },

        company_name:
        {
        type: DataTypes.STRING,
        required: true
        },
        email:
        {
            type: DataTypes.STRING,
            unique: true,
            required:true
        },
        primary_phone:
        {
            type: DataTypes.STRING,
            required:true
        },
        secondary_phone: {
            type: DataTypes.STRING
        },
        fax: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },

        state: {
            type: DataTypes.STRING
        },
        postal_code: {

            type: DataTypes.BIGINT
        }
        ,

        website: {
            type: DataTypes.STRING
        },

        status: {
            type: DataTypes.ENUM,
            default:'approved',
            values: ['approved', 'rejected', 'in review']
        },

        department:
        {
            type: DataTypes.STRING
        },
        key_technologies:
        {
            type: DataTypes.TEXT
        },

        misc_notes:
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

module.exports=Company;