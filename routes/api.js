var express = require('express');
var router = express.Router();
var moment = require('moment');

router.route('/parsetime')

.get(function(req,res){
console.log('working');
var responsed = JSON.stringify('Json working');
var Time = moment.utc((req.query.time) * 1000).local().format('LLLL');
console.log("date/time at IST : " + Time);
var Time2 = moment.utc((req.query.time) * 1000).format('LLLL');
console.log("UTC : " + Time2);
console.log(req.query.tz);
switch(req.query.tz){
    case 'UM12' :  {TZ = -12; break;}
    case 'UM11' : { TZ = -11; break;}
    case 'UM10' : { TZ = -10; break;}
    case 'UM9' : { TZ = -9; break;}
    case 'UM8' : { TZ = -8; break;}
    case 'UM7' : { TZ = -7; break;}
    case 'UM6' : { TZ = -6; break;}
    case 'UM5' : { TZ = -5; break;}
    case 'UM4' : { TZ = -4; break;}
    case 'UM25' : { TZ = -3.5; break;}
    case 'UM3' : { TZ = -3; break;}
    case 'UM2' : { TZ = -2; break;}
    case 'UM1' : { TZ = -1; break;}
    case 'UTC' : { TZ = 0; break;}
    case 'UP1' : { TZ = 1; break;}
    case 'UP2' : { TZ = 2; break;}
    case 'UP3' : { TZ = 3; break;}
    case 'UP25' : { TZ = 3.5; break;}
    case 'UP4' : { TZ = 4; break;}
    case 'UP35' : { TZ = 4.5; break;}
    case 'UP5' : { TZ = 5; break;}
    case 'UP45' : { TZ = 5.5; break;}
    case 'UP6' : { TZ = 6; break;}
    case 'UP7' : { TZ = 7; break;}
    case 'UP8' : { TZ = 8; break;}
    case 'UP9' : { TZ = 9; break;}
    case 'UP85' : { TZ = 9.5; break;}
    case 'UP10' : { TZ = 10; break;}
    case 'UP11' : { TZ = 11; break;}
    case 'UP12' : { TZ = 12; break;}
    default : {TZ = 0; break;}
}

var tzTime = moment.utc((req.query.time) * 1000).utcOffset(TZ).format('LLLL');
var tzTimeStrict = moment.utc((req.query.time) * 1000).utcOffset(TZ).format('YYYY-MM-DD h:mm:ss');
console.log("Time at the given Zone : "+TZ+" GMT : "+ tzTime);

var time = JSON.stringify(tzTimeStrict);
res.send({
    time
});

});



module.exports = router;