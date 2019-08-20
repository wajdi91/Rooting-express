const express=require('express')
const app = express()
const timestamp = require('time-stamp'); 
const current_hour =timestamp('HH');

if (current_hour<17&&current_hour>8) {
console.log("TimeInZone Server")
app.use(express.static('./public'));
}
else
	{
		app.use(express.static('./public2'));
		console.log("Timeout Serveur")
	}

	
app.listen(3000,err=>{
    if(err) console.log("server error")
    else console.log("server is connected in port 3000")
})

