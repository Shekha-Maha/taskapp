import React from 'react'
import ProfileImage from '../../../assets/profileImage.png'
import './Profile.css'

function Profile() {
    return (
        <div className='Light_bg'>
            <div className='Profile'>
                <div className='Profile_img'>
                    <img src={ProfileImage}/>
                </div>
                <div className='Profile_name'>
                    <h3>Md Shaiful Islam</h3>
                </div>
            </div>
        </div>
    )
}

export default Profile
