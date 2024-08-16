const { request } = require('express');
const {wheelModel} = require('../models/skateboardModel');

const getAllWheels = async (request,response) =>{ 
  try{
    const allWheels = await wheelModel.find({}).sort({createdAt:-1});
    response.status(200).json(allWheels)
  } catch{
    console.log('an error occured while fetching all wheels')
    response.status(400).json({error:"error while fetching all wheels"})
  }
}


const getWheel = async (request,response) =>{
  const {id} = request.params;
  try {
    const wheel = await wheelModel.findById(id)
    if (!wheel){
      response.status(400).json({error:'wheel not found'})
    }
    response.status(200).json(wheel);
  } catch {
    console.log('an error occured while fetching wheel')
    response.status(400).json({error:"error while fetching wheel"})

  }


}

const getWheelSet = async(request, response) => {
    const idList = request.query.id ? request.query.id.split(',') : [] ;
  
    if (idList.length === 0) {
      return response.status(400).json({ error: "No IDs provided" });
    }

  let data = []
 
  for (const i of idList){
    try {
      const wheel = await wheelModel.findById(i)
      if (!wheel){
        data.push({[i]: 'wheel not found'})
      }else{
        data.push({[i]: wheel})
      }
    }
    catch (error){
      console.log('An error has occured when fetching wheel id:',i)
      data.push({[i]: 'error fetching wheel'})
    }
  }
  response.status(200).json(data)
}

const addWheel = async (request,response) =>{
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
        const newWheel = await wheelModel.create({
            title,
            brand,
            price,
            tags,
            image
        })
        response.status(200).json(newWheel);

    }
    catch(error){
        response.status(400).json({error:error.message});
    }
}


module.exports = {
    getAllWheels,
    getWheel,
    addWheel,
    getWheelSet
}