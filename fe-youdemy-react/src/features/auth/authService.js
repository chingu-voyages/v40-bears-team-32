import axios from 'axios'

const baseUrl = '/auth'

const login = async (userData) => {
    const res = await axios.post(baseUrl + "/login", userData)

    if(res.data){
        localStorage.setItem('user', JSON.stringify(res.data))
    }
    
    return res.data
}

const register = async (userData) => {
    const res = await axios.post(baseUrl + "/signup", userData)

    if(res.data){
        localStorage.setItem('user', JSON.stringify(res.data))
    }

    return res.data
}

const logout = async () => {
    await axios.delete(baseUrl + "/logout")
    localStorage.removeItem('user')
}

export default {
    login,
    logout,
    register
}