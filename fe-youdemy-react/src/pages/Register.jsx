import {useState, useEffect} from 'react'
import styled from 'styled-components'
import { FaUser, FaSchool } from 'react-icons/fa'
import { useParams } from "react-router-dom"

const Register = () => {

    const { type } = useParams()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
    })

    const {firstName, lastName, email, password, password2 } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <section className='heading'>
                    {type === 'instructor' 
                        ? <Title><FaSchool /> New Instructor Register</Title>
                        :<Title><FaUser /> New Student Register</Title>
                    }
                <Subtitle>Please create an account</Subtitle>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            placeholder="First name"
                            onChange = {onChange} 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            placeholder="Last name"
                            onChange = {onChange} 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            onChange = {onChange} 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            onChange = {onChange} 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control"
                            id="password2"
                            name="password2"
                            value={password2}
                            placeholder="Confirm Password"
                            onChange = {onChange} 
                        />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-black btn-block'>
                             Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

const Title = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    align-items: center;
`

const Subtitle = styled.p`
  color: rgba(43, 167, 220, 1);
  font-size: 2rem;
`

export default Register