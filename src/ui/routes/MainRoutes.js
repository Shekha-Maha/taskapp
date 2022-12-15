import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import BottomNav from '../components/bottomNav/BottomNav'
import AllTask from '../pages/allTask/AllTask'
import CreateTask from '../pages/createTask/CreateTask'
import Dashboard from '../pages/dashboard/DashBoard'

function MainRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/all_task' element={<AllTask />} />
          <Route exact path='/create_task' element={<CreateTask />} />
        </Routes> 
        <BottomNav/>  
      </Router>
    </div>
  )
}

export default MainRoutes
