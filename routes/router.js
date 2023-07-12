const express=require('express');
const router=express.Router();
const {
    getData1,
    setData1
} = require('../controllers/routeController');

router.route('/').get(getData1).post(setData1)


module.exports=router;