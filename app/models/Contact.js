/**
 * Created by oa on 5/16/2017.
 */
'use strict'
var DataTypes = require('sequelize');
var config = require('../config'),
    db = require('../services/database');


var Contact = db.define('contact',
        {
            id:
            {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            company_id:
            {
                type: DataTypes.STRING,
                primaryKey: true,
                references: { model: "company", key: "id" }, //by default primary key is taken id
                onDelete: "cascade",
                allowNull: false
            },
            user_id:
            {
                type: DataTypes.STRING,
                primaryKey: true,
                references: { model: "company", key: "user_id" },
                onDelete: "cascade",
                allowNull: false
            },

            email:
            {

                unique:true,
                type: DataTypes.STRING,
                required: true
            },
            f_name:
            {
                type: DataTypes.STRING,
                required: true
            },

            m_name:
            {
                type: DataTypes.STRING

            },

            l_name:
            {
                type: DataTypes.STRING,
                required: true
            },
            designation:
            {
                type: DataTypes.STRING

            },
            department:
            {
                type: DataTypes.STRING //fk
            },
            work_phone:
            {
                type: DataTypes.STRING
            },
            cell_phone:
            {
                type: DataTypes.STRING

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

module.exports=Contact;