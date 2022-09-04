import { useState } from "react"
import { useQuery } from 'react-query'
import axios from "axios"
import CreateGoal from "./components/createGoal/CreateGoal"
import Goals from './components/goals/Goals'

function App() {
  const { data, error, isError, isLoading } = useQuery('users', fetchGoals)

  //check token in localStorage
  const token = localStorage.getItem('tokenJWT')
  if (token) {
    setAuthToken(token)
  }

  //set token on axios header
  function setAuthToken(token) {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }

  //fetchGoals from API
  async function fetchGoals() {
    const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/goals`)
    return data
  }

  console.log(data)

  if (isLoading) {
    return (
      <div className="main_app-body">
        <div className="main_app-box">
          <p className="textP">...</p>
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="main_app-body">
        <div className="main_app-box">
          <p className="textP">You need to login in</p>
        </div>
      </div>
    )
  }

  return (
    <div className="main_app-body">
      <div className="main_app-box">
        <p className="textP">My goals</p>
        <CreateGoal />
        {data.map(goal => <Goals key={goal._id} goalId={goal._id} goalText={goal.text} />)}
      </div>
    </div>
  )
}

export default App
