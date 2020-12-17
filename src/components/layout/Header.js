import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>
                Appointments
            </h1>
        </header>
    )
}

const headerStyle = {
    backgroundColor: '#DC8A2A',
    color: '#fff',
    padding: '10px'
}

export default Header;