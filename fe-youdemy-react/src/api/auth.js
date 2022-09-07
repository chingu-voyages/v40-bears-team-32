import axios from 'axios'

const baseUrl = '/auth'

const login = async credentials => {
    try {
        const res = await axios.post(baseUrl, credentials)
        return await res.data
    } catch(err){
        console.log("Error loggin in:\n", err)
    }
}

export default {
    login,
}