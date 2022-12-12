import React from 'react'
import Dashboard from '../pages/dashboard/DashBoard'

function MainRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Dashboard/>} />
          {/* <Route exact path='/projects' element={} /> */}

          {/* <Route element={<Redirect to="/"/>}/>  */}

          {/* <Redirect to="/"/>  */}
        </Routes>
        
      </Router>
    </div>
  )
}

export default MainRoutes
