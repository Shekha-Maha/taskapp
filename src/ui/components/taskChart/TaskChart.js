import React from 'react'
import DonutChart from 'react-donut-chart'
import './TaskChart.css'

function TaskChart() {
    return (

        <div className="taskChart_container">
            <DonutChart
                style={{ height: '100%', width: '100%' }}

                data={[
                    {
                        label: 'Completed on time',
                        value: 70,
                    },
                    {
                        label: 'Delayed',
                        value: 10,
                    },
                    {
                        label: 'Postponed',
                        value: 10,
                    },
                    {
                        label: 'Yet to come',
                        value: 5,
                    },
                    {
                        label: 'Skipped',
                        value: 5,
                    }
                ]}
            />

        </div>

    )
}

export default TaskChart