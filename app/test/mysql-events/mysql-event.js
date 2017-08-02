var MySQLEvents = require('mysql-events');
var dsn = {
    host:     "127.0.0.1",
    user:     "susang",
    password: "susang",
    port: "3307",
};
var mysqlEventWatcher = MySQLEvents(dsn);
var watcher =mysqlEventWatcher.add(
    'myDB.table.field.value',
    function (oldRow, newRow, event) {
        //row inserted
        console.log('hello');
        if (oldRow === null) {
            //insert code goes here
  console.log('hellog');
        }

        //row deleted
        if (newRow === null)
        {
            //delete code goes here
            console.log('hellog');
        }

        //row updated
        if (oldRow !== null && newRow !== null)
        {
            //update code goes here
            console.log('hellog');
        }

        //detailed event information
        console.log(event)
    },
    'match this string or regex'
);/**
 * Created by oa on 8/1/2017.
 */
module.exports=watcher;