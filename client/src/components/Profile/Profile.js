import React, { useState } from 'react'

const profile = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    
    return (
        <div>
            I am the profile!
        </div>
    )
}

export default profile
