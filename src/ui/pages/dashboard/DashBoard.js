import React from 'react'
import { Link } from 'react-router-dom'
import Profile from '../../components/profile/Profile'
import './DashBoard.css'
import plus from '../../../ui/assets/plus.png'
import rightArrow from '../../../ui/assets/rightArrow.png'
import TaskChart from '../../components/taskChart/TaskChart'
import Title from '../../components/title/Title'

function Dashboard() {
  return (
    <>
      <div className='MainBackground pt-3'>
        <div className='container'>
         <Title name='Dashboard' />
          <div>
            <Profile />
            <div className='optionContainer'>
              <Link to="create_task" className='optionWrapper'>
                <div className='optionButton'>
                  <span>Create Task</span>
                  <div className='imgContainer'>
                    <img src={plus} height={15} />
                  </div>
                </div>
              </Link>

              <Link to="all_task" className='optionWrapper ms-3'>
                <div className='optionButton'>
                  <span>All Task</span>
                  <div className='imgContainer'>
                    <img src={rightArrow} height={15} />
                  </div>
                </div>
              </Link>

            </div>

            <div className='taskChart'>
              <p>Task Status</p>
              <TaskChart />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard