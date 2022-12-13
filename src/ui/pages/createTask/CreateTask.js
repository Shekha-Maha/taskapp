import React from 'react'
import Title from '../../components/title/Title'
import './Createtask.css'

function CreateTask() {
    return (
        <>
            <div className='MainBackground pt-4'>
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
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateTask
