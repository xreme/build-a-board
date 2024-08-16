const { request, response } = require("express");
const { skateboardModel, deckModel } = require("../models/skateboardModel");

// get all skateboard builds
const getAllDecks = async (request, response) => {
  try{
    const allDecks = await deckModel.find({}).sort({ createdAt: -1 });
    response.status(200).json(allDecks);
  } catch{
    console.log('an error occured while fetching all decks')
    response.status(400).json({error: 'an error occured while fetching all decks'})
  }
};

// get a specific skateboard build
const getDeck = async (request, response) => {
  const { id } = request.params;
  try {
    const deck = await deckModel.findById(id);
    if (!deck) {
      response.status(400).json({ error: "deck not found" });
    }
    response.status(200).json(deck);
  } 
  catch {
    console.log("an unexpected error has occured");
    response.status(400).json({ error: "unexpected error has occured" });
  }
};

// get specific set of decks
const getDeckSet = async(request, response) => {
  const idList = request.query.id ? request.query.id.split(',') : [] ;
  
  if (idList.length === 0) {
    return response.status(400).json({ error: "No IDs provided" });
  }

  let data = []
 
  for (const i of idList){
    try {
      const deck = await deckModel.findById(i)
      if (!deck){
        data.push({[i]: 'deck not found'})
      }else{
        data.push({[i]: deck})
      }
    }
    catch (error){
      console.log('An error has occured when fetching deck id:',i)
      data.push({[i]: 'error fetching deck'})
    }
  }
  response.status(200).json(data)
}
const addDeck = async (request, response) => {
  const { title, brand, price, image, material, size } = request.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!brand) {
    emptyFields.push("brand");
  }
  if (!price) {
    emptyFields.push("price");
  }
  if (!image) {
    emptyFields.push("image link");
  }
  if (!material) {
    emptyFields.push("material");
  }
  if (!size) {
    emptyFields.push("size");
  }

  if (emptyFields.length > 0) {
    response.status(400).json({ error: "Missing fields ", emptyFields });
    return;
  }

  try {
    const newDeck = await deckModel.create({
      title,
      brand,
      price,
      image,
      material,
      size,
    });
    response.status(200).json(newDeck);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

// delete deck ** needs to be fixed
const deleteDeck = async (request, response) => {
  const { id } = request.params;

  if (!deckModel) {
    response.status(404).json({ error: "deck not found" });
  }

  const deck = await deckModel.findByIdAndDelete({ _id: id });

  if (!deck) {
    response.status(404).json({ error: "deck not found" });
  }

  response.status(200).json(deck);
};

// need to fix this **update
const updateSkateboardBuild = async (request, response) => {
  const { id } = request.params;

  if (!deckModel) {
    response.status(404).json({ error: "skateboard not found" });
  }

  const skatebaord = await deckModel.findByIdAndUpdate(
    { _id: id },
    { ...request.body }
  );

  if (!skatebaord) {
    response.status(404).json({ error: "skateboard not found" });
  }

  response.status(200).json({ info: skatebaord + "skateboard updated" });
};

module.exports = {
  addDeck,
  getAllDecks,
  getDeck,
  getDeckSet
};
