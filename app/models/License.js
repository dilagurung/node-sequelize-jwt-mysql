/**
 * Created by oa on 7/21/2017.
 */

'use strict'
var DataTypes = require('sequelize');
var config = require('../config'),
    db = require('../services/database');

    var License = db.define('license',
        {
            id:
            {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false
            },

            organization:
            {
                type: DataTypes.STRING,
                allowNull: false,
                references: { model: "organization", key: "id" }, //by default primary key is taken id
                onDelete: "cascade",
                unique:true
            },

            start_date:
            {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
                allowNull:false


            },
            expire_date:
            {

                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
                allowNull:false
            },

            number_of_users:
            {
                type: DataTypes.INTEGER,
                default:0,
                allowNull:false
            },

            status:
            {
                type: DataTypes.BOOLEAN,
                default:false,
                allowNull:false
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

  module.exports=License;