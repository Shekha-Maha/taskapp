import React from 'react'
import Time from '../../../assets/time.png'
import './ViewTask.css'

function ViewTask() {

    const data = [1, 2, 3];



    return (
        data.map(() => {
            return (
                <div className='ViewTask mt-3'>
                    <div className='Light_bg px-4'>
                        <h1>Watching World</h1>
                        <p className='pb-4'>Argentine Vs Netherland</p>

                        <div className='Timing_Section'>
                            <span>Date: Sat, 14-12-2022</span>
                            <div className='Timing'>
                                <img src={Time} height={18} />
                                <p>1:00 AM - 3:00 AM</p>
                            </div>
                        </div>
                        <button className='btn_warning'>View Details</button>
                    </div>
                </div>
            )
        })
    )
}

export default ViewTask
