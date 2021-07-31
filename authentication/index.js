var express = require("express") ;
var bodyParser = require("body-parser") ;
var auth = require("./auth.js") ;
var jwt = require("jwt-simple") ;
var users = require("./users.js") ;
var config = require("./config.js") ;
var app = express() ;
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(auth().initialize());
app.get("/", function(req, res){
    res.json(
        {
            status: "My API is alive"
        }
    )
});
app.post("/token", function(req,res){
    if(req.body.email && req.body.password){
        var email = req.body.email ;
        var password = req.body.password ;
        var users = users.find(function(u){
            return u.email === email && u.password === password ;
        });
        console.log(users) ;
        if (users){
            var payload = {
                id: user.id
            } ;
            var token = jwt.encode(payload, cfg.jwtSecret) ;
            res.json({
                token : token
            }) ;

        }
        else{
            res.sendStatus(401) ;
        }
    }
});
app.listen(3000, function(){
    console.log("My APp is running") ;
}) ;
// for jsonwebtoken we need to install passport passport-jwt jwt-simple
module.exports = app ;