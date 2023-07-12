const asyncHandler =require('express-async-handler')
const User = require('../model/scenarioModel')

//Get Data
const getData1 = asyncHandler(async (req, res) => {
    const users= await User.find();

    res.status(200).json(users)
})

//Post data
const setData1 = asyncHandler(async (req, res) => {
    let body=req.body
    const Users= await User.create(body)

    res.status(200).json(Users)
})

module.exports={
    getData1,
    setData1
}