// DEPENDENCIES
const stages = require('express').Router()
const db = require('../models')
const { Stage } = db 


// FIND ALL stages
stages.get('/', async (req, res) => {
    try {
        const foundstages = await Stage.findAll({
            order: [ [ 'name', 'ASC' ] ],
        })
        res.status(200).json(foundstages)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND 1
stages.get('/:id', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { stage_id: req.params.id }
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE 
stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new stage',
            data: newStage
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE
stages.put('/:id', async (req, res) => {
    try {
        const updatedstages = await Stage.update(req.body, {
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedstages} `
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE
stages.delete('/:id', async (req, res) => {
    try {
        const deletedstages = await Stage.destroy({
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedstages} `
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = stages