const request = require('request')
const forecast = (loclat,loclong,callback) =>{
    const url = 'https://api.darksky.net/forecast/2473d1fc083787941715f81ff5d3d4ef/'+loclat+',' +loclong
    request({url: url , json:true },(errors,responses)=>{
        if(errors){
             callback('Unable to connect the internet',undefined)
        }
      if(responses.body.error){
           callback('unable to find the forecast for given location',undefined)
        }
        else{
            callback(undefined,{temp:responses.body.currently.temperature,
                precip:responses.body.currently.precipProbability})
        }
    }) 
}
module.exports = forecast