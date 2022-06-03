import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_GOAL } from '../../utils/mutations'
import { QUERY_GOALS } from '../../utils/queries'

const GoalForm = () => {
  const [formState, setFormState] = useState({
    goalText: '',
    username: '',
  })
  const [characterCount, setCharacterCount] = useState(0)
  const [addGoal, { error }] = useMutation(ADD_GOAL)

  // const [addGoal, { error }] = useMutation(ADD_GOAL, {
  //   update(cache, { data: { addGoal } }) {
  //     try {
  //       const { goals } = cache.readQuery({ query: QUERY_GOALS })

  //       cache.writeQuery({
  //         query: QUERY_GOALS,
  //         data: { goals: [addGoal, ...goals] },
  //       })
  //     } catch (e) {
  //       console.error(e)
  //     }
  //   },
  // })

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)

    try {
      const { data } = await addGoal({
        variables: {
          goalText: formState.goalText,
          username: formState.username,
        },
      })

      setFormState({
        goalText: '',
        username: '',
      })

      window.location.assign('/profile');

    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    if (name === 'goalText' && value.length <= 280) {
      setFormState({ ...formState, [name]: value })
      setCharacterCount(value.length)
    } else if (name !== 'goalText') {
      setFormState({ ...formState, [name]: value })
    }
  }

  return (
    <div>
      <h3 class='Goalquestion'>What's on your techy mind?</h3>

      <p
        className={`m-0 ${
          characterCount === 280 || error ? 'text-danger' : ''
        }`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12">
          <textarea
            name="goalText"
            placeholder="Here's a new goal..."
            value={formState.goalString}
            className="form-input w-100"
            style={{ lineHeight: '1.5' }}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="username"
            placeholder="Add your name to get credit for the goal..."
            value={formState.username}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Goal
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  )
}

export default GoalForm
