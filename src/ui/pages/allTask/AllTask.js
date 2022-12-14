import React from 'react'
import TimeZone from '../../components/timeZone/TimeZone'
import Title from '../../components/title/Title'
import ViewTask from '../../components/viewTask/ViewTask'


function AllTask() {
  return (
    <div className='MainBackground pt-4'>
      <div>
        <div className='container'>
          <Title />
          <div className=''>
            <TimeZone />
            <ViewTask />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllTask