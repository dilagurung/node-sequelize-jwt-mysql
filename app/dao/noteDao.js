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


var Note=require('../../app/models/Note');
db = require('../services/database');
var insert_note= function (req,res,next)
{
    db.sync().then(function () {

        Note.findOrCreate({where: {id: req.body.note.id}, defaults: req.body.note})
            .spread((note, created) => {
                console.log(created, note);
                res.json(created);
            });

    }).catch(function (error) {
        console.log(error);
        res.sendStatus(403)
    })


}
var update_note= function (req,res,next)
{
    var _id=req.params.id;
    Note.update(
        req.body.note,
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


var delete_note= function (req,res,next)
{
    //var id=req.params.id;
    Note.destroy({
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
    Note.findAll().then(note =>
    {
        res.json(note);
    });

}
var find_by_id=function (req,res,next)
{

    console.log('query id ',req.query.id);
    if (Object.keys(req.query).length>0) {
        Note.findOne({ where:req.query}).then(note => {
            if (note)
            {
                res.json(note);
            }
            else {

                res.json("value not found");
            }
        });}
    else {
        res.json("value not found 2");
    }
}

module.exports={add:insert_note,delete:delete_note,update:update_note,find_all:find_all,find_by_id:find_by_id};


