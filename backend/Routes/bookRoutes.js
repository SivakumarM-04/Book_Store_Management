const express = require('express')
const bookModel=require('../models/bookModel')
const router = express.Router()
//To Create a book in DB
router.post("/", async (req,res)=>{
    try{
        if(!req.body.title ||
            !req.body.author||
            !req.body.publishYear
        ){
            return res.status(400).send({msg : "Send all Required fields : title,author,publishYear"})
        }
        const newBook = {
            title : req.body.title,
            author : req.body.author,
            publishYear : req.body.publishYear
        }
        const book = await bookModel.create(newBook)
        return res.status(201).send(book)
    }
    catch(err){
        console.log(err.message);
        res.status(500).send({msg : err.message})        
    }
})
//To get All books
router.get('/', async (req,res)=>{
    try{
        const books = await bookModel.find({})
        return res.status(200).json({
            count : books.length,
            data : books
        })
    }
    catch(err){
        res.status(500).send({msg : err.message})
    }
})
//To get All books
router.get('/', async (req,res)=>{
    try{
        const books = await bookModel.find({})
        return res.status(200).json({
            count : books.length,
            data : books
        })
    }
    catch(err){
        res.status(500).send({msg : err.message})
    }
})
//To get book by id
router.get('/:id', async (req,res)=>{
    try{
        const id = req.params.id
        const book = await bookModel.findById(id)
        return res.status(200).json(book)
    }
    catch(err){
        res.status(500).send({msg : err.message})
    }
})
//Update a BOOK
router.put('/:id',async (req,res)=>{
    try{
        if(!req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({
                message : "Send all required fields : title,author,publishYear"
            }
            )
        }
        const id = req.params.id
        const result = await bookModel.findByIdAndUpdate(id,req.body)
        if(!result){
            return res.status(404).send({message : "Book not found"})
        }
        return res.status(200).send({message : " Book updated successfully"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg : err.message})
    }
})
//delete a book
router.delete('/:id', async (req,res)=>{
    try{
        const id = req.params.id
        const deletedBook = await bookModel.findByIdAndDelete(id)
        if(!deletedBook){
            return res.status(404).send({message : "Book not found"})
        }
        return res.status(200).send({message : "Book deleted successfully"})

    }catch(err){
        res.status(500).send(err.message)
    }
})

module.exports = router; 