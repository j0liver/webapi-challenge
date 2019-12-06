const express = require('express')
const db = require("../data/helpers/actionModel")


const router = express.Router()


router.get("/:id", (req,res)=>{
    const id = req.params.id
    db.get(id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', (req,res) => {
    db.insert(req.body)
    .then(action => {
        res.status(201).json(action)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put("/:id", (req, res) => {
    
    db.update(req.params.id, req.body)
    .then(action=>{
        res.status(201).json(action)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
    .then(()=>{
        res.status(201).json({message:"thing has been removed"})
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;