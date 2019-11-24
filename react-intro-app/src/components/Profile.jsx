import React from 'react';
import './Profile.css'
import profile from './male.png'

class Profile extends React.Component {
    profileInfo = {
        name: 'Jordan Walke',
        title: 'React Creator',
        profileimg: profile,
        bio: 'Lorem ipsum'
    }
    render() {
        return (
            <div className='profile'>
                <img src={this.profileInfo.profileimg} width='150' height='150'></img>
                <div className='profileinfo'>
                    <h3>{this.profileInfo.name}</h3>
                    <h4>{this.profileInfo.title}</h4>
                    <p> {this.profileInfo.bio}</p>
                </div>
                
            </div>
        )
    }
}

export default Profile;