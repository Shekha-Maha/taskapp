import React from 'react'
import TimeZone from '../../components/timeZone/TimeZone'
import Title from '../../components/title/Title'
import ViewTask from '../../components/viewTask/ViewTask'
import './AllTask.css'


function AllTask() {
  return (
    <div className='mainBackground pt-3'>
        <div className='container'>
          <Title name="All Task" />
          <div className=''>
            <TimeZone />
            <ViewTask />
          </div>
        </div>
    </div>
  )
}

export default AllTask