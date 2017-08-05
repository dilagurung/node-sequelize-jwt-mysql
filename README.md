
 An authentication system built using **J**WTs, **A**ngular, **M**ySQL, **E**xpress and **S**equelize in the [Creating a Role-Based User Authentication System Using Angular, Express and MySQL]

### Installation
 In order to install the dependencies run:
```
npm install
```

### Starting the Server
In order to start the server run:
```
node app/server.js
```
#derived from (https://hisk.io/role-based-authentication-with-angular-express-jwt-mysql-part-1)
http://docs.sequelizejs.com/manual/tutorial/models-definition.html
for more on datbase level reg-experession validation
//https://stackoverflow.com/questions/29716346/how-to-create-a-trigger-in-sequelize-nodejs
before you logged in, check which organization does that user belongs to
once the organization is retrieved , then license is queried if this organization has valid license
if not the it will be prompt to subscribe


by not making license as fk in organization we are keeping user hassles away from entering license



admin logged in
create an organization
license is automatically created for that organization
with its status false.
once organization is created , suppose if he pay
license start and end date.

or when user is created they will be asked to add organization

----------------------------------------------------------------------------------------

http://localhost:8080/api/authenticate
application/json

http://localhost:8080/api/job

   {"job":{
     "id":"J013",
        "user_id":"dila.gurung2@gmail.com",
        "contact_id":"CON01",
     "title":"Mrs",
     "city":"cal",
        "email":"com222@gmail.com",
         "primary_phone":"19788555452",
     "f_name":"Hamidd",
     "l_name":"Akhtar"

    }}




   {"candidate":{
     "id":"CAN01",
        "user_id":"dila.gurung2@gmail.com",
        "email":"com222@gmail.com",
         "primary_phone":"19788555452",
     "f_name":"Hamidd",
     "l_name":"Akhtar"

    }}

http://localhost:8080/api/contact
   {"contact":{
     "id":"CON01",
         "company_id":"co02",
        "user_id":"dila.gurung2@gmail.com",
        "company_name":"COM",
        "email":"com22@gmail.com",
         "primary_phone":"19788555452",
     "f_name":"Hamid",
     "l_name":"Akhtar"

    }}

http://localhost:8080/api/company

   {"company":{
         "id":"co02",
        "user_id":"dila.gurung2@gmail.com",
        "company_name":"COM",
        "email":"com22@gmail.com",
         "primary_phone":"19788555452"

    }}

//license
   {"license":{
         "id":"lic01",
        "organization":"ORG01",
        "email":"dila.gurung1.user@gmail,com",
        "number_of_users":2,
         "status":true

    }}