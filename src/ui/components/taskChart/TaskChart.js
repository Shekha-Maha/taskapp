import React from 'react'
import DonutChart from 'react-donut-chart'
import './TaskChart.css'

function TaskChart() {
    return (
        <div className="taskChart_container">
            <DonutChart
                data={[
                    {
                        label: 'a',
                        value: 25,
                    },
                    {
                        label: '',
                        value: 10,
                        isEmpty: true,
                    },
                    {
                        label: 'b',
                        value: 5,
                    },
                    {
                        label: 'c',
                        value: 15,
                    },
                    {
                        label: 'd',
                        value: 10,
                    },
                ]}
            />

        </div>

    )
}

export default TaskChart