const mongoose  = require('mongoose');
let winston = require('winston')

module.exports = function (){


     mongoose.connect('mongodb+srv://<password>@cluster0.1jlko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser:true,
       useUnifiedTopology:true, useCreateIndex:true})
.then(()=>winston.info('connected to MongoDB'))
.catch(err => console.error('could not connect to MongoDB...'))
}


