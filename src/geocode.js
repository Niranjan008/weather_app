const request = require('request')
const geocode = (location,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(location) + '.json?access_token=pk.eyJ1IjoibmlyYW5qYW5rIiwiYSI6ImNrM2oyNHBsajBlbjgzcHM3ZTVldHk5eTkifQ.SWdo30smz1lhfy_uDLc1sw'
    request({url:url,json:true},(error,response) =>{
        if(error){
            callback('Unable to connect to the network',undefined)
        }
        else if(response.body.features.length === 0){
            callback('Inappropriate search terms',undefined)
        }
        else{
             callback(undefined,{lat : response.body.features[0].center[1],
             long : response.body.features[0].center[0],
             pl : response.body.features[0].place_name})
            //const obj = {latitude:lat,longitude:long,place:pl}
            //callback(undefined,obj)
        }
    }) 
}

module.exports = geocode