var express = require('express')
    ,bodyParser = require('body-parser')
    ,app = express()
    ,port = process.env.PORT || 4004;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/post',function(req,res){
    var name = req.body.name;
    res.send(name);
});

app.listen(port,function(){
    console.log('server strated...');
});


