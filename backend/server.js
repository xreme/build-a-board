require('dotenv').config();

const express = require('express');

// express app
const app = express();

// import routes
const skateboard_builds = require('./routes/skateboardBuilds');
const decks = require('./routes/deckRouter');
const trucks = require('./routes/truckRouter');
const wheels = require('./routes/wheelRouter');

const mongoose = require('mongoose')

app.use(express.json());

app.use((req,res,next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.use('/api/skateboardBuilds',skateboard_builds);
app.use('/api/decks',decks);
app.use('/api/trucks',trucks);
app.use('/api/wheels',wheels);

//connect to DB w mongoose
console.log('Connecting to DB...');
mongoose.connect(process.env.MONGO_DB_URI)
    .then(() => {
        console.log('connected to DB');
        
        // listen for requests
        app.listen(process.env.PORT, () => console.log('listening on port', process.env.PORT));
    })
    .catch(error => console.log(error));
