 import { users } from '../data/users';

import React from 'react'

const Profile = () => {

    const currentUser = users[0];
  return (
 <div
 style={{marginBottom:"20px"}}
  className="page profile-page flex flex-col  items-center ">
      <h1>My Account</h1>
      
      <div className="profile-card">
        <div className="profile-avatar-placeholder">
          {currentUser.name.charAt(0)}
         </div>
         <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>{currentUser.name}</h2>
         <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Role: {currentUser.role.toUpperCase()}
        </p>

      <div className="profile-details">
        <div className="profile-details-row">
          <span className="profile-label">Email</span>
          <span className="profile-value">{currentUser.email}</span>
        </div>
        <div className="profile-details-row">
          <span className="profile-label">Member Since</span>
          <span className="profile-value">July 2026</span>
        </div>
        <div className="profile-details-row">
          <span className="profile-label">Default Shipping</span>
          <span className="profile-value">123 Main St, New York, NY</span>
        </div>
      </div>

       <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center' }}>
         <button className="btn btn-secondary" onClick={() => alert('Log out clicked')}>
           Sign Out
         </button>
       </div>
     </div>
   </div>
  )
}

export default Profile
