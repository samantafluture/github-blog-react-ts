import axios from 'axios'

export const USER_NAME = 'samantafluture'
export const REPO = 'github-blog-react-ts'
export const SEARCH_URL = '?q=%20repo:samantafluture/github-blog-react-ts'

const query: string = '';

export const API_USER = axios.create({
	baseURL: 'https://api.github.com/users/',
})

export const API_POST = axios.create({
	baseURL: 'https://api.github.com/search/issues',
})

// List of issues
// https://api.github.com/search/issues?q=%20repo:samantafluture/github-blog-react-ts

// https://api.github.com/search/issues?q=${query}%20repo:${USER_NAME}/${REPO}
