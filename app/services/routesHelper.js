'use strict';

exports.allowOnly = function(accessLevel, callback)
{

    console.log('hello access ',accessLevel);
    function checkUserRole(req, res)
    {

        console.log(accessLevel,' hellog');
        if(!(accessLevel & req.user.role)) {
         //res.json('fuck');
          res.sendStatus(403);
           //res.json('unauthorized');
            //res.status(403).json({ message: 'Username already exists!' });
            return;
        }

        callback(req, res);
    }

    return checkUserRole;
};