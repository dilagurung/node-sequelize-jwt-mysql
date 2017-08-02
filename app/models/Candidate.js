/**
 * Created by oa on 5/16/2017.
 */
/**
 * Created by oa on 6/24/2017.
 */


/**
 * Created by oa on 5/16/2017.
 */
'use strict'
var DataTypes = require('sequelize');
var config = require('../config'),
    db = require('../services/database');

    var Candidate = db.define('candidate',
        {
            id:
            {
                type: DataTypes.STRING, //assicate it with organization id
                primaryKey: true,
                //defaultValue: DataTypes.UUIDV4,
                allowNull: false
            },


            user_id:
            {
                type: DataTypes.STRING,
                primaryKey: true,
                references: { model: "user", key: "id" },
                onDelete: "cascade",
                allowNull: false
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
            },
            email_primary:
            {
                type: DataTypes.STRING, //fk
                required: true

            },
            email_secondary:
            {
                type: DataTypes.STRING, //fk


            },
            mobile:
            {
                type: DataTypes.STRING

            },
            phone_home:
            {
                type: DataTypes.STRING //fk
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

            best_time_to_call:
            {
                type: DataTypes.STRING
            },
            resume_link:
            {
                type: DataTypes.STRING

            },

            can_relocate:
            {
                type: DataTypes.BOOLEAN

            },
            current_employer:
            {
                type: DataTypes.STRING

            },
            current_pay:
            {
                type: DataTypes.STRING

            },
           desired_pay:
            {
                type: DataTypes.STRING

            },
            source:
            {
                type: DataTypes.STRING

            },
            key_skills:
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

 module.exports=Candidate;