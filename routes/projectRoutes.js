const express = require('express')
const db = require('../data/helpers/projectModel')

const router = express.Router()

router.get('/:id', (req, res) => {
    db.get(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/', (req, res) => {
    db.insert(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        console.log(err)
    })
})

router.put('/:id', (req, res) => {
    db.update(req.params.id, req.body)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        console.log(err)
    })
})

router.delete('/:id', (req,res) => {
    db.remove(req.params.id)
    .then(()=>{
        res.status(200).json({message:'project removed'})
    })
    .catch(err => {
        console.log(err)
    })
})

router.get("/:id/actions", (req,res) => {
    db.getProjectActions(req.params.id)
    .then((actions)=>{
        res.status(200).json({actions})
    })
    .catch(err => {
        console.log(err)
    })
})
module.exports = router