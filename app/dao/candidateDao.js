/**
 * Created by oa on 8/1/2017.
 */
/**
 * Created by oa on 7/21/2017.
 */
/**
 * Created by oa on 6/22/2017.
 http://docs.sequelizejs.com/manual/tutorial/instances.html
 */


var Candidate=require('../../app/models/Candidate');
db = require('../services/database');
var insert_candidate= function (req,res,next)
{
    db.sync().then(function () {

        Candidate.findOrCreate({where: {id: req.body.candidate.id}, defaults: req.body.candidate})
            .spread((candidate, created) => {
                console.log(created, candidate);
                res.json(created);
            });

    }).catch(function (error) {
        console.log(error);
        res.sendStatus(403)
    })


}
var update_candidate= function (req,res,next)
{
    var _id=req.params.id;
    Candidate.update(
        req.body.candidate,
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


var delete_candidate= function (req,res,next)
{
    //var id=req.params.id;
    Candidate.destroy({
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
    Candidate.findAll().then(candidate =>
    {
        res.json(candidate);
    });

}
var find_by_id=function (req,res,next)
{

    console.log('query id ',req.query.id);
    if (Object.keys(req.query).length>0) {
        Candidate.findOne({ where:req.query}).then(candidate => {
            if (candidate)
            {
                res.json(candidate);
            }
            else {

                res.json("value not found");
            }
        });}
    else {
        res.json("value not found 2");
    }
}

module.exports={add:insert_candidate,delete:delete_candidate,update:update_candidate,find_all:find_all,find_by_id:find_by_id};


