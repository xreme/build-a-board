const { request } = require('express');
const {truckModel} = require('../models/skateboardModel');

const getAllTrucks = async (request,response) =>{ 

  try{
    const allTrucks = await truckModel.find({}).sort({createdAt:-1});
    response.status(200).json(allTrucks)
  }catch{
    console.log('an error occured while fetching all decks')
    response.status(400).json({'error':'an error occured'})
  }
}


const getTruck = async (request,response) =>{
  const {id} = request.params;
  try {
    const truck = await truckModel.findById(id)
    if (!truck){
      response.status(400).json({error:'truck not found'})
    }
    response.status(200).json(truck);
  } catch(error){
    console.log('an error occured while trying to fetch the truck ')
    response.status(400).json({error})
  }
}

const getTruckSet= async(request, response) => {
    const idList = request.query.id ? request.query.id.split(',') : [] ;
  
    if (idList.length === 0) {
      return response.status(400).json({ error: "No IDs provided" });
    }
  
  let data = []
 
  for (const i of idList){
    try {
      const truck = await truckModel.findById(i)
      if (!truck){
        data.push({[i]: 'truck not found'})
      }else{
        data.push({[i]: truck})
      }
    }
    catch (error){
      console.log('An error has occured when fetching truck id:',i)
      data.push({[i]: 'error fetching truck'})
    }
  }
  response.status(200).json(data)
}

const addTruck = async (request,response) =>{
    const{title,brand,price,tags,image} = request.body;
    
    let emptyFields = [];

    if (!title){
        emptyFields.push('title')
    }
    if (!price){
        emptyFields.push('price')
    }
    if (!brand){
        emptyFields.push('brand')
    }
    if (!image){
        emptyFields.push('image')
    }
    if (emptyFields.length > 0){
        response.status(400).json({error:'Missing fields ' , emptyFields})
        return
    }

    try {
        const newTruck = await truckModel.create({
            title,
            brand,
            price,
            tags,
            image
        })
        response.status(200).json(newTruck);

    }
    catch(error){
        response.status(400).json({error:error.message});
    }
}


module.exports = {
    getAllTrucks,
    getTruck,
    addTruck,
    getTruckSet
}