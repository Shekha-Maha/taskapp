import React from 'react'
import { Link } from 'react-router-dom'
import Profile from '../../components/profile/Profile'
import './DashBoard.css'

function Dashboard() {
  return (
    <>
      <div className='MainBackground pt-5'>
        <div className='container'>
          <div>
            <Profile />

            <div className='Light_bg mt-5'>
              <Link to="Create-Task" className='Create_btn'>
                <span>Create Task</span>
                <h1>+</h1>
              </Link>
            </div>
            <div className='Light_bg mt-3'>
              <Link to="Create-Task" className='Create_btn2'>
                <span>All Task</span>
                <h1>&#62;</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard