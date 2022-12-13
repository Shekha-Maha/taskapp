import React from 'react'
import { Link } from 'react-router-dom'
import Profile from '../../components/profile/Profile'
import './DashBoard.css'
import plus from '../../../ui/assets/plus.png'
import rightArrow from '../../../ui/assets/rightArrow.png'

function Dashboard() {
  return (
    <>
      <div className='MainBackground pt-5'>
        <div className='container'>
          <div>
            <Profile />
            <div className='Light_bg mt-3'>
              <Link to="Create-Task" className='optionButton'>
                <span>Create Task</span>
                <div className='imgContainer'>
                  <img src={plus} height={15} />
                </div>
              </Link>
            </div>
            <div className='Light_bg mt-3'>
              <Link to="Create-Task" className='optionButton'>
                <span>All Task</span>
                <div className='imgContainer'>
                  <img src={rightArrow} height={15} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard