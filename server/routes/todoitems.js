const route = require('express').Router();
const mongoose=require('mongoose');
const todoitems = require("../models/tidoitems");
//add item
route.post('/api/items',async (req,res)=>{
try {
    const newitem = todoitems({
         item : req.body.item

    })
    const saveitem = await newitem.save()
    res.status(200).json(saveitem)
} catch (error) {
    console.log("error while doing it")
}
})


route.get('/api/items',async (req,res)=>{
    try {
        const alltodoitems = await todoitems.find({});
        res.status(200).json(alltodoitems)
    } catch (error) {
        console.log('error while getting the data')
    }
})


route.put('api/items/:id',async (req,res)=>{
    try {
        const updateitem = await todoitems.findByIdAndUpdate(req.params.id,{$set :req.body});
        res.status(200).json('item updated')
    } catch (error) {
        console.log('error while updating the data')
    }
})


route.delete('/api/items/:id',async (req,res)=>{
    try {
        const deleteitem  = await todoitems.findByIdAndDelete(req.params.id);
        res.status(200).json("item deleted succesfullr") 
    } catch (error) {
        console;log("error while deleting it")
    }
})
module.exports = route;