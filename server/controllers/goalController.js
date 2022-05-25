const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');

//function get goals at route GET/api/goals
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(404).json(goals)
})

//function set goal at route POST/api/goals
const setGoal = asyncHandler(async (req, res) => {
        res.status(404).json({message: `Update goal ${req.params.id}`})
    })   


//function update goals at route PUT/api/goals/:id
const updateGoal = asyncHandler(async (req, res) => {
    res.status(404).json({ message: `Update goal ${req.params.id}` })
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
