//function get goals at route GET/api/goals
const getGoals = async (req, res) => {
    res.status(200).json({ message: 'get goals'})
}

//function set goal at route POST/api/goals
const setGoal = async (req, res) => {
    if (!req.body.text) {
        res.status(404).json({ message: 'set a goal'})
    }   
}

//function update goals at route PUT/api/goals/:id
const updateGoal = async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
}

//function delete goals at route delete/api/goals/:id
const deleteGoal = async (req, res) => {
    es.status(200).json({ message: `Delete goal ${req.params.id}` })
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}