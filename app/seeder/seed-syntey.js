/**
 * Created by oa on 8/1/2017.
 */

var Organization=require('../../app/models/organization');
var License=require('../../app/models/License');
var User=require('../../app/models/user');

db = require('../services/database');


var seed=function ()
{


    var _organization=
    {"organization":{
       "id":"DEF_01",
        "name":"Defualt",
        "email":"def@info.com"

    }};


    var _license=
    {"license":{

        "id":"DEF_LIC_01",
        "organization":"DEF_01",
        "number_of_users":5,
        "status":true

    }};
    var
        _user=
    {"user":{
         "id":"dila.gurung@gmail.com",
        "password":"Dila@1987",
        "organization":"DEF_01",
        "role":4,
        "email":"dila.gurung@gmail,com",
        "f_name":"Test",
        "l_name":"test"
    }};






    db.sync().then(function () {

        Organization.findOrCreate({where: {id: 1}, defaults:_organization.organization
        })
            .spread((organization, created) => {
                console.log(created, organization);



                License.findOrCreate({where: {id: 1}, defaults:_license.license
                })
                    .spread((license, created) => {
                        console.log(created, license);


                        User.findOrCreate({where: {id: 1}, defaults:_user.user
                        })
                            .spread((user, created) => {
                                console.log(created, user);



                            });

                    }).catch(function (error) {
                    console.log(error);
                })

                    });

            }).catch(function (error) {
            console.log(error);
        });


}
module.exports=seed;