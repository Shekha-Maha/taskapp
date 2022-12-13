import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import AllTask from '../pages/allTask/AllTask'
import Dashboard from '../pages/dashboard/DashBoard'

function MainRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Dashboard/>} />
          <Route exact path='/all_task' element={<AllTask/>} />

          {/* <Route element={<Redirect to="/"/>}/>  */}

          {/* <Redirect to="/"/>  */}
        </Routes>
        
      </Router>
    </div>
  )
}

export default MainRoutes
