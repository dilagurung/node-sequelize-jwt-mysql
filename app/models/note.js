/**
 * Created by oa on 8/2/2017.
 */
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



var Note = db.define('note',
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
        type:
        {
            type: DataTypes.ENUM,
            values: ['Contact', 'Company', 'Job'],
            allowNull:false
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

module.exports=Note;