import React, {useState} from 'react';

const SignUp = () => {
    const [newUser, setNewUser] = useState({firstName: "", lastName: "", email: "", password: ""})

    const handleChange = e => {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(newUser)
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input 
                    type="text"
                    name="firstName"
                    placeholder="Josh"
                    value={newUser.firstName}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="lastName"
                    placeholder="McCarthy"
                    value={newUser.lastName}
                    onChange={handleChange}
                    />
                <input
                    type="text"
                    name="email"
                    placeholder="josh@abc.com"
                    value={newUser.email}
                    onChange={handleChange}
                />
                <input 
                    type="password"
                    name="password"
                    value={newUser.password}
                    onChange={handleChange}
                />
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp