import React from 'react'
import TimeZone from '../../components/timeZone/TimeZone'
import Title from '../../components/title/Title'
import ViewTask from '../../components/viewTask/ViewTask'


function AllTask() {
  return (
    <div className='MainBackground pt-3'>
      <div>
        <div className='container'>
          <Title name="All Task" />
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