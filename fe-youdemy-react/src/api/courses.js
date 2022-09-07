import axios from 'axios'

const baseUrl = '/courses'

const getAll = async () =>  await axios.get(baseUrl).data

export default {
    getAll,
}