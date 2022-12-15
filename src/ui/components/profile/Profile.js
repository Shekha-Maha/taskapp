import React from 'react'
import ProfileImage from '../../../assets/profileImage.png'
import './Profile.css'

function Profile() {
    return (
        <div className='profileContainer'>
            <div className='Profile'>
                <div className='Profile_img'>
                    <img src={ProfileImage}/>
                </div>
                <div className='Profile_name'>
                    <p>Md Shaiful Islam</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
