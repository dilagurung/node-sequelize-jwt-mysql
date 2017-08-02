/**
 * Created by oa on 7/21/2017.
 */
/**
 * Created by oa on 6/22/2017.
 http://docs.sequelizejs.com/manual/tutorial/instances.html
 */


var Job=require('../../app/models/job');
db = require('../services/database');
var insert_job= function (req,res,next)
{


    db.sync().then(function () {

        Job.findOrCreate({where: {id: req.body.job.id}, defaults: req.body.job})
            .spread((job, created) => {
                console.log(created, job);
                res.json(created);
            });

    }).catch(function (error) {
        console.log(error);
        res.sendStatus(403)
    })


}
var update_job= function (req,res,next)
{
    var _id=req.params.id;
    Job.update(
        req.body.job,
        { where: { id: _id } }
    )
        .then(result =>
            {
                res.json(result)
            }
        )
        .catch(err =>
            {
                res.json(0);
            }
        );
}


var delete_job= function (req,res,next)
{
    //var id=req.params.id;
    Job.destroy({
        where: {id:req.params.id},
        //truncate: true //this will delete all the data
    }) .then(result =>
        {
            res.json(result)
        }
    )
        .catch(err =>
            {
                res.json(0);
            }
        );
}


var find_all=function (req,res,next)
{
    Job.findAll().then(job =>
    {
        res.json(job);
    });

}
var find_by_id=function (req,res,next)
{

    console.log('query id ',req.query.id);
    if (Object.keys(req.query).length>0) {
        Job.findOne({ where:req.query}).then(job => {
            if (job)
            {
                res.json(job);
            }
            else {

                res.json("value not found");
            }
        });}
    else {
        res.json("value not found 2");
    }
}

module.exports={add:insert_job,delete:delete_job,update:update_job,find_all:find_all,find_by_id:find_by_id};


/**
 * Created by oa on 8/1/2017.
 */
