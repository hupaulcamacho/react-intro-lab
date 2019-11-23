import React from 'react';

import Profile from './Profile'

class ContactList extends React.Component {
    render() {
        return (
            <div>
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