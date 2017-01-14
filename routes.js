var express=require("express");
var app=express();
var db=require("monk")("45.112.250.108:27017/TestDB");
var user=db.get("user");


var responseUserList=function(req,res){
    user.find({},function(err, userList){
        if (err) throw err;
      	res.json(userList);
    });
};

var responseRegUser=function(req,res){
   
    var json = '';
    req.on('data', function (data) {
        json += data;
    });

    req.on('end', function () {
        console.log("UserInsert: "+json);
        user.insert(JSON.parse(json),function(err, userList){
            if (err) throw res.send(err);
            res.json(userList);
        });
    });

};

var loginResponse=function(req,res){
    var json = '';
    req.on('data', function (data) {
        json += data;
    });

    req.on('end', function () {
        console.log("UserInsert: "+json);
        var userId=new 
        user.findOne({userId:userId.userId},function(err, userList){
            if (err) throw res.send(err);
            res.json(userList);
        });
    });
};

app.get("/userList",responseUserList);

app.post("/registerUser",responseRegUser)

app.listen('3000',function(){
    console.log("Listening port 3000"); 
});


