var gulp = require('gulp');
//test to check if it listen to database events

var gulp =require('gulp');
jshint=require('gulp-jshint');
mongoose=require('mongoose');
 var log=require('util-logging');
 var logger =  new log.ConsoleLogger().setLevel(log.Level.INFO);
var seed=require('../../app/seeder/seed-syntey');



gulp.task( 'default',function(args)
{
console.log('default');
});

gulp.task( 'test',function(args)
{
    console.log('this is test');
});





//database seeder
gulp.task('seed-data',function ()
{console.log('seeding data');

    seed();
});




gulp.task('jshint', function ()
{
    logger.info('big brother is watching you baby .. be apprise');
    test.test();
    return gulp.src('./*.js').pipe(jshint()).pipe(jshint.reporter('jshint-stylish'));


});
gulp.task('test-mysql-event',function () {

    require('./mysql-events/mysql-event');
});


/*
{"user":{

    "id":"dila.gurung@gmail.com",
        "password":"Dila@1987"}
}*/
