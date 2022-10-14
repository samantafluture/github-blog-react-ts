import axios from 'axios'

export const USER_NAME = 'samantafluture'
export const REPO_NAME = 'github-blog-react-ts'

export const api = axios.create({
	baseURL: 'https://api.github.com'
})