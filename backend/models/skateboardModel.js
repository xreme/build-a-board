const mongoose = require('mongoose');

const skateboardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    deckID: {
        type: String,
        required: true
    },
    truckID: {
        type: String,
        required: true
    },
    wheelsID: {
        type: String,
        required: true
    },
    bearingsID: {
        type: String,
        required: true
    },
},
{
    timestamps: true
});

const deckSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: [{
        seller: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }],
    tags: [
        {
            type: String,
            required: false
        }
    ],
    image: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
},
{
    timestamps: true
});

const truckSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: [{
        seller: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }],
    tags: [
        {
            type: String,
            required: false
        }
    ],
    image: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const wheelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: [{
        seller: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }],
    tags: [
        {
            type: String,
            required: false
        }
    ],
    image: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: [{
        seller: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }],
    image: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});



module.exports = {
    skateboardModel: mongoose.model('Skateboard', skateboardSchema),
    deckModel: mongoose.model('Deck', deckSchema),
    truckModel: mongoose.model('Truck', truckSchema),
    wheelModel: mongoose.model("Wheel", wheelSchema)
};