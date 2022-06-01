const faker = require('faker')

const db = require('../config/connection')
const { Goal, User } = require('../models')

db.once('open', async () => {
  await Goal.deleteMany({})
  await User.deleteMany({})

  // create user data
  const userData = []

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName()
    const email = faker.internet.email(username)
    const password = faker.internet.password()

    userData.push({ username, email, password })
  }

  const createdUsers = await User.collection.insertMany(userData)

  // create goals
  let createdGoals = []
  for (let i = 0; i < 100; i += 1) {
    const goalText = faker.lorem.words(Math.round(Math.random() * 20) + 1)

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length)
    const { username, _id: userId } = createdUsers.ops[randomUserIndex]

    const createdGoal = await Thought.create({ Text, username })

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { goals: createdGoal._id } }
    )

    createdGoals.push(createdGoal)
  }
})
