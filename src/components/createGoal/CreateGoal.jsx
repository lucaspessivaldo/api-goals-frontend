import { useState } from 'react'
import axios from 'axios'
import './createGoal.css'

export default function CreateGoal() {
  const [goal, setGoal] = useState()

  async function newGoal() {
    const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/goals`, { text: goal })
  }

  function changeValue(event) {
    setGoal(event.target.value)
  }

  return (
    <div className="container-creategoal">
      <input
        className="input-creategoal"
        placeholder="New goal"
        onChange={changeValue}
        type="text" />

      <button
        className="button-creategoal"
        onClick={newGoal}
      >+</button>

    </div>
  )
}
