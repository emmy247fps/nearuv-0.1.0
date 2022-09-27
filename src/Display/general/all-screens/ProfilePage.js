import React from 'react'
import { DesktopProfile, MobileProfile } from '../../../comp-files/components'
import '../../../comp-files/app-style/_profilePage.scss'


const ProfilePage = () => {
  return (
    <div className='profilePageContainer'>
      <div>
         <MobileProfile />
      </div>
      <div>
        <DesktopProfile />
      </div>
    </div>
  )
}

export default ProfilePage