const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');

//function get goals at route GET/api/goals
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(404).json(goals)
})

//function set goal at route POST/api/goals
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Add goal')
    }
    const goal = await Goal.create({ 
        text: req.body.text,
    })
        res.status(200).json(goal)
    })   


//function update goals at route PUT/api/goals/:id
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(404)
        throw new Error('No goal')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, 
        { 
        new: true,
    })
    res.status(200).json(updatedGoal)
})

//function delete goals at route delete/api/goals/:id
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(404).json({ message: `Delete goal ${req.params.id}` })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}
