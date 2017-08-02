/**
 * Created by oa on 7/21/2017.
 */
/**
 * Created by oa on 6/22/2017.
 http://docs.sequelizejs.com/manual/tutorial/instances.html
 */


var Organization=require('../../app/models/organization');
db = require('../services/database');
var insert_organization= function (req,res,next)
{


db.sync().then(function () {

    Organization.findOrCreate({where: {id: req.body.organization.id}, defaults: req.body.organization})
        .spread((organization, created) => {
            console.log(created, organization);
            res.json(created);
        });

}).catch(function (error) {
    console.log(error);
    res.sendStatus(403)
})


}
var update_organization= function (req,res,next)
{
    var _id=req.params.id;
    Organization.update(
        req.body.organization,
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


var delete_organization= function (req,res,next)
{
    //var id=req.params.id;
    Organization.destroy({
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
    Organization.findAll().then(organization =>
    {
        res.json(organization);
});

}
var find_by_id=function (req,res,next)
{

    console.log('query id ',req.query.id);
    if (Object.keys(req.query).length>0) {
        Organization.findOne({ where:req.query}).then(organization => {
            if (organization)
            {
                res.json(organization);
            }
            else {

                res.json("value not found");
    }
    });}
    else {
        res.json("value not found 2");
    }
}

module.exports={add:insert_organization,delete:delete_organization,update:update_organization,find_all:find_all,find_by_id:find_by_id};


