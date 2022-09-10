import {useState, useEffect} from 'react'
import styled from 'styled-components'
import { FaSignInAlt } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"
import {toast} from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import {login, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'


const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const {email, password} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth) 

    useEffect(() => {
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user ){
            navigate('/user-home')
        }

        dispatch(reset())
    },[user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }

    if(isLoading){
        return <Spinner />
    }

    return (
        <>
            <section className='heading'>
                <Title>Login<FaSignInAlt /></Title>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
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
    margin: 1rem;
    display: flex;
    gap: 1rem;
    align-items: center;
`

const Subtitle = styled.p`
  color: rgba(43, 167, 220, 1);
  font-size: 2rem;
`

export default Login