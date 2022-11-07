let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')
let bodyParser = require('body-parser')
let seatRoute = require('./routes/Seat-Routes')

mongoose.connect('mongodb://localhost:27017/')
        .then((x)=>{
            console.log('Connected')
        })
        .catch((err)=>{
            console.log('Error',err.reason)
        })
        const app = express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended : true
        }));
        app.use(cors());
        app.use('/seat',seatRoute)

        //port
        const port = process.env.PORT || 4000;
        
        const server = app.listen(port,() =>{
            console.log('Connected to port ' + port)
        })
        