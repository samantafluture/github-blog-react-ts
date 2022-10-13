import axios from 'axios'
import { createContext, ReactNode, useCallback, useEffect, useState } from 'react'
import { API_USER, USER_NAME, REPO, API_POST, SEARCH_URL } from '../lib/axios'

interface User {
	id: number
	name: string
	login: string
	avatar_url: string
	html_url: string
	followers: number
	bio: string | null
	company: string | null
}

interface Post {
	id: number
	title: string
	created_at: string
	body: string
}

interface GitHubContextType {
	user: User
	posts: Post[]
	fetchUser: () => Promise<void>
	fetchPosts: (query?: string) => Promise<void>
}

interface GitHubProviderProps {
	children: ReactNode
}

export const GitHubContext = createContext({} as GitHubContextType)

export function GitHubProvider({ children }: GitHubProviderProps) {
	const [user, setUser] = useState<User>({} as User)
	const [posts, setPosts] = useState<Post[]>([])

	const fetchUser = async () => {
		const response = await API_USER.get(USER_NAME)
		setUser(response.data)
	}

  // gambiarra
	const fetchPosts = useCallback(async (query?: string) => {
		const response = await API_POST.get('', {
      params: {
        q: 'repo:samantafluture/github-blog-react-ts'
      }
    })
    
    console.log(response.data.items)
		setPosts(response.data.items)
	}, [])

	useEffect(() => {
		fetchUser()
    fetchPosts()
	}, [fetchPosts])

	return (
		<GitHubContext.Provider value={{ user, posts, fetchUser, fetchPosts }}>
			{children}
		</GitHubContext.Provider>
	)
}
