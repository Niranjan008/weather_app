const express = require('express')
const hbs = require('hbs')
const path = require('path')
const forecast = require('./forecast.js')
const geocode = require('./geocode.js')
const app = express()
const parpath = path.join(__dirname,'/partials')
const pubpath = path.join(__dirname,'/public')
const port = process.env.PORT || 3000
app.use(express.static(pubpath))
hbs.registerPartials(parpath)
app.set('view engine','hbs')
app.get('/products',(req,res)=>{
    res.send({products:[]})
})
app.get('/contact',(req,res) => {
    if(!req.query.address){
         res.send({error:'NO address entered'})
    }
    else{
        geocode(req.query.address,(error,data)=>{
            if(error){
                return res.send({error})
            }
            forecast(data.lat,data.long,(error,datas)=>{
                if(error){
                    return res.send({error})
                }
                res.send({
                    location:data.pl,
                    forecasts:datas
                })

            } )
        })
    }
})
app.get('/',(req,res) => {
    res.render('')
})
app.get('/contact',(req,res) => {
    res.render('contact')
})
app.get('*',(req,res) => {
    res.render('404')
})
app.listen(port,()=>{
    console.log('ho')
})