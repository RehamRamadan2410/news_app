
// nodemon src/app.js
const express = require('express')
// access
const app = express()
const port = process.env.PORT || 3000



// index.html / index.hbs / app.get  (home page)
// Serve html,json
const path = require('path')
const publicDirectory = path.join(__dirname,'../public')
app.use(express.static(publicDirectory))

app.set('view engine', 'hbs');
// 1) D:\nti\node\express-app\src 2)../
const viewsPath = path.join(__dirname,'../templates/views')
app.set('views',viewsPath)

const hbs = require('hbs')
const partialsPath = path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialsPath)

const news = require('./tools/news')


app.get('/',(req,res)=>{
    news((error, data) => {
        if (error) {
            return res.send({
                error: error
            })
        } else {
            res.render('index', {
                art: data
            })
        }
    })
})





    // nodemon src/app.js -e js,hbs
//////////////////////////////////////////////////////////////////////////////

// localhost:3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})