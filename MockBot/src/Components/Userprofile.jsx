import React, { useState } from 'react';
import './Userprofile.css';

const Userprofile = () => {
    const [userInfo, setUserInfo] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@gmail.com',
        technicalField: 'Data Analysis',
        university: 'Harvard University' // Add initial university value
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const toggleEditing = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="profile-page">
            <div className="profile-card">
                <div className="profile-header">
                    <div className="profile-circle">
                        {userInfo.firstName[0] + userInfo.lastName[0]}
                    </div>
                    <h2 className="profile-name">
                        {userInfo.firstName} {userInfo.lastName}
                    </h2>
                    <p className="profile-role">{userInfo.technicalField}</p>
                    <p className="profile-university">{userInfo.university}</p> {/* Display university here */}
                </div>
                <a href="#!" className="profile-link">View Public Profile</a>
            </div>

            <div className="settings-card">
                <div className="tabs">
                    <button className="tab active">Account Settings</button>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label>User Name</label>
                        <input 
                            type="text" 
                            name="firstName"
                            value={userInfo.firstName}
                            onChange={handleChange}
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="form-group">
                        <label>University Name</label>
                        <input 
                            type="text" 
                            name="university"
                            value={userInfo.university}
                            onChange={handleChange}
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input 
                            type="email" 
                            name="email"
                            value={userInfo.email}
                            onChange={handleChange}
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="form-group">
                        <label>Technical Field</label>
                        <input 
                            type="text" 
                            name="technicalField"
                            value={userInfo.technicalField}
                            onChange={handleChange}
                            disabled={!isEditing}
                        />
                    </div>
                    <button onClick={toggleEditing} className="edit-button">
                        {isEditing ? "Save" : "Edit"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Userprofile;