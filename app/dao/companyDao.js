/**
 * Created by oa on 7/21/2017.
 */
/**
 * Created by oa on 6/22/2017.
 http://docs.sequelizejs.com/manual/tutorial/instances.html
 */


var Company=require('../../app/models/company');
db = require('../services/database');
var insert_company= function (req,res,next)
{


db.sync().then(function () {

    Company.findOrCreate({where: {id: req.body.company.id}, defaults: req.body.company})
        .spread((company, created) => {
            console.log(created, company);
            res.json(created);
        });

}).catch(function (error) {
    console.log(error);
    res.sendStatus(403)
})


}
var update_company= function (req,res,next)
{
    var _id=req.params.id;
    Company.update(
        req.body.company,
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


var delete_company= function (req,res,next)
{
    //var id=req.params.id;
    Company.destroy({
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
    Company.findAll().then(company =>
    {
        res.json(company);
});

}
var find_by_id=function (req,res,next)
{

    console.log('query id ',req.query.id);
    if (Object.keys(req.query).length>0) {
        Company.findOne({ where:req.query}).then(company => {
            if (company)
            {
                res.json(company);
            }
            else {

                res.json("value not found");
    }
    });}
    else {
        res.json("value not found 2");
    }
}

module.exports={add:insert_company,delete:delete_company,update:update_company,find_all:find_all,find_by_id:find_by_id};


