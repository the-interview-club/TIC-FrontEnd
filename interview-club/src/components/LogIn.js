import React, {useState} from 'react';

const LogIn = () => {
    const [user, setUser] = useState({email: "", password: ""})

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(user)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    stype="text" 
                    name="email" 
                    value={user.email}
                    onChange={handleChange}
                    />
                <input 
                    stype="password" 
                    name="password" 
                    value={user.password}
                    onChange={handleChange}
                />
                <button>
                    Log In
                </button>
            </form>
        </div>
    )
}

export default LogIn