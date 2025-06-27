import React, { useState } from 'react'

export const ControlledComponents = () => {
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }
    return (
        <div className='sideContainer'>
            <h1 className="heading">Controlled Components</h1>
            <p className="definition"><b>Defination:</b>A controlled component in React is an element whose state is controlled by React itself. This means that the component's state is stored in a React component's state and can only be updated by triggering a state change via React’s setState() method.</p>
            <form onSubmit={handleSubmit} className="form-container">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
