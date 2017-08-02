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


    var Job = db.define('job',
        {
            id:
            {
                type: DataTypes.STRING,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false
            },

            contact_id:
            {
                type: DataTypes.STRING,
                references: { model: "contact", key: "id" },
                onDelete: "cascade",
                allowNull: false
            },
            user_id:
            {
                type: DataTypes.STRING,
                references: { model: "contact", key: "user_id" },
                onDelete: "cascade",
                allowNull: false
            },
           
            title:
            {
                type: DataTypes.STRING,
                required: true
            },
            city:
            {
                type: DataTypes.STRING, //fk
                required: true

            },
            state:
            {
                type: DataTypes.STRING //fk

            },
            recruiter:
            {
                type: DataTypes.STRING //fk//( give the name of admin or user here)
            },
            owner:
            {
                type: DataTypes.STRING //(give the name of user here ..clarify it with client)
            },
            start_date:
            {
                type: DataTypes.DATE

            },
            end_date:
            {
                type: DataTypes.DATE
            },
            duration:
            {
                type: DataTypes.INTEGER
            },

            max_rate:
            {
                type: DataTypes.INTEGER
            },

            type:
            {
                type: DataTypes.ENUM,
                default:'c',
                values: ['contract', 'contract-to-hire', 'hire','freelance']
            },
            salary:
            {
                type: DataTypes.DECIMAL
            },
            openings:
            {
                type: DataTypes.INTEGER
            },
            accessibility:
            {
                type: DataTypes.ENUM,

                values: ['private', 'public']

            },

            description:
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

  module.exports=Job;