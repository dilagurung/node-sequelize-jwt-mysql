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


var Contact=require('../../app/models/contact');
db = require('../services/database');
var insert_contact= function (req,res,next)
{


    db.sync().then(function () {

        Contact.findOrCreate({where: {id: req.body.contact.id}, defaults: req.body.contact})
            .spread((contact, created) => {
                console.log(created, contact);
                res.json(created);
            });

    }).catch(function (error) {
        console.log(error);
        res.sendStatus(403)
    })


}
var update_contact= function (req,res,next)
{
    var _id=req.params.id;
    Contact.update(
        req.body.contact,
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


var delete_contact= function (req,res,next)
{
    //var id=req.params.id;
    Contact.destroy({
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
    Contact.findAll().then(contact =>
    {
        res.json(contact);
    });

}
var find_by_id=function (req,res,next)
{

    console.log('query id ',req.query.id);
    if (Object.keys(req.query).length>0) {
        Contact.findOne({ where:req.query}).then(contact => {
            if (contact)
            {
                res.json(contact);
            }
            else {

                res.json("value not found");
            }
        });}
    else {
        res.json("value not found 2");
    }
}

module.exports={add:insert_contact,delete:delete_contact,update:update_contact,find_all:find_all,find_by_id:find_by_id};


