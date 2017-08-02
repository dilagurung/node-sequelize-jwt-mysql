/**
 * Created by oa on 7/30/2017.
 */
/**
 * Created by oa on 7/21/2017.
 */
/**
 * Created by oa on 12/6/2016.
 */


Contact=require('../dao/contactDao');

var add=function(req,res,next)
{
    Contact.add(req,res,next);
}

var update= function (req,res,next)
{
    Contact.update(req,res,next);
}


var drop = function (req,res,next)
{
    Contact.delete(req,res,next);
}

var find_all= function (req,res,next)
{
    //res.json('hello');
    Contact.find_all(req,res,next);
}

var find_by_id= function (req,res,next)
{
    Contact.find_by_id(req,res, next);
}

module.exports={add:add,drop:drop,update:update,find_all:find_all,find_by_id:find_by_id}

