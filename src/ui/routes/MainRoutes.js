import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import AllTask from '../pages/allTask/AllTask'
import CreateTask from '../pages/createTask/CreateTask'
import Dashboard from '../pages/dashboard/DashBoard'

function MainRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route exact path='/' element={<Dashboard />} /> */}
          <Route exact path='/' element={<AllTask />} />
          {/* <Route exact path='/Create-Task' element={<CreateTask />} /> */}
          {/* <Route exact path='/all_task' element={<AllTask/>} /> */}

        </Routes>
        
      </Router>
    </div>
  )
}

export default MainRoutes
