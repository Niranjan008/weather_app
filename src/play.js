const geocode = require('./geocode.js')
const forecast = require('./forecast.js')
const place = process.argv[2]
if(!place)
{
    console.log('Please provide a valid address')
}
else{
geocode(place , (error,data) =>{
    //console.log(data.lat,data.long)
        if(error){
        return console.log('Error  '  + error)
        }
        //console.log('The co-ordinates are ' + data.lat + ' and ' + data.long + ' in ' + data.pl)
        forecast(data.lat,data.long,(error,datas) =>{
            //console.log(sone,stwo)
            if(error){
            return console.log('Error  ' + error)
            }
            console.log('The co-ordinates are ' + data.lat + ' and ' + data.long + ' in ' + data.pl + 'The temperature is ' + datas.temp + ' and the chance of precipitation is ' + datas.precip)
    })
})

}