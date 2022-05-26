const express = require('express');
const router = express.router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

// creating the routes
router.get('/', getGoals)

router.post('/', setGoal) 

router.put('/:id', updateGoal) 

router.delete('/:id', deleteGoal) 

module.exports = router