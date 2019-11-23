import React from 'react';
import './ContactList.css'
import Profile from './Profile'

class ContactList extends React.Component {
    render() {
        return (
            <div id='contacts-list'>
                <h1> Contacts </h1>
                <Profile />
                <Profile />
                <Profile />
                <Profile />
            </div>
        )
    }
}

export default ContactList;