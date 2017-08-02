/**
 * Created by oa on 7/21/2017.
 */
/**
 * Created by oa on 6/22/2017.
 http://docs.sequelizejs.com/manual/tutorial/instances.html
 */


    var License=require('../../app/models/license');
db = require('../services/database');
var insert_license= function (req,res,next)
{


db.sync().then(function () {

    License.findOrCreate({where: {id: req.body.license.id}, defaults: req.body.license})
        .spread((license, created) => {
            console.log(created, license);
            res.json(created);
        });

}).catch(function (error) {
    console.log(error);
    res.sendStatus(403)
})


}
var update_license= function (req,res,next)
{
    var _id=req.params.id;
    License.update(
        req.body.license,
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


var delete_license= function (req,res,next)
{
    //var id=req.params.id;
    License.destroy({
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
    License.findAll().then(license =>
    {
        res.json(license);
});

}
var find_by_id=function (req,res,next)
{

    console.log('query id ',req.query.id);
    if (Object.keys(req.query).length>0) {
        License.findOne({ where:req.query}).then(license => {
            if (license)
            {
                res.json(license);
            }
            else {

                res.json("value not found");
    }
    });}
    else {
        res.json("value not found 2");
    }
}

module.exports={add:insert_license,delete:delete_license,update:update_license,find_all:find_all,find_by_id:find_by_id};


