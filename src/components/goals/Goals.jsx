import React from 'react'
import axios from 'axios'
import { MdDelete } from 'react-icons/md'
import './goals.css'

export default function Goals({ goalId, goalText }) {

  async function removeGoal() {
    const { data } = await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/goals/${goalId}`)
    console.log(data)
  }

  return (
    <div className='goal-container'>
      <div className='goal-text'>{goalText}</div>
      <MdDelete
        className='goal-delete-icon'
        onClick={removeGoal} />
    </div>
  )
}
