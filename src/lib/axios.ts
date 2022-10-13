import axios from 'axios'

export const API_USER = axios.create({
	baseURL: 'https://api.github.com/users/',
})