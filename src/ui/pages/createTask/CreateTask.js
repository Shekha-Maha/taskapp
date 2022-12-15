import React from 'react'
import Title from '../../components/title/Title'
import './Createtask.css'
import leftText from '../../../assets/leftText.png'
import rightText from '../../../assets/rightText.png'
import centerText from '../../../assets/centerText.png'
import unoderList from '../../../assets/unoderList.png'
import oderList from '../../../assets/oderList.png'

function CreateTask() {
    return (
        <>
            <div className='mainBackground pt-4'>
                <div className='container'>
                    <Title name="Create Task" />
                </div>
                <div className='CreateForm pt-4 px-4'>
                    <div className='container'>
                        <form>
                            <div className='form-group'>
                                <label>Task Title</label>
                                <input type='text' className='form-control' />
                            </div>

                            <div className='row mt-4'>
                                <div className='col-6'>
                                    <div className='form-group'>
                                        <label>Start Time</label>
                                        <input type='text' className='form-control' />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='form-group'>
                                        <label>End Time</label>
                                        <input type='text' className='form-control' />
                                    </div>
                                </div>
                            </div>
                            <div className='form-group mt-4'>
                                <label>Date</label>
                                <input type='date' className='form-control' placeholder='mm/dd/yyyy'/>
                            </div>

                            <div className='form-group mt-4'>
                                <label>Details</label>
                                <div className='icon_btn'>
                                    <button>
                                        <img src={leftText} height={17}/>
                                    </button>
                                </div>
                                <textarea className='form-control' rows="7"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateTask
