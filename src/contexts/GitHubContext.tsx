import {
	createContext,
	ReactNode,
	useCallback,
	useState,
} from 'react'
import {
	USER_NAME,
	api,
	REPO_NAME,
} from '../service/axios'

export interface User {
	id: number
	name: string
	login: string
	avatar_url: string
	html_url: string
	followers: number
	bio: string | null
	company: string | null
}

interface PostSummary {
	id: number
	number: number
	title: string
	created_at: string
	body: string
}

export interface PostContent {
	id: number
	number: number
	html_url: string
	title: string
	comments: number
	created_at: string
	body: string
	user: {
		login: string
	}
}

interface GitHubContextType {
	user: User
	posts: PostSummary[]
	postContent: PostContent
	fetchUser: () => Promise<void>
	fetchPosts: (query?: string) => Promise<void>
	fetchPostContent: (id?: string) => Promise<void>
}

interface GitHubProviderProps {
	children: ReactNode
}

export const GitHubContext = createContext({} as GitHubContextType)

export function GitHubProvider({ children }: GitHubProviderProps) {
	const [user, setUser] = useState<User>({} as User)
	const [posts, setPosts] = useState<PostSummary[]>([])
	const [postContent, setPostContent] = useState<PostContent>(
		{} as PostContent
	)

	const fetchUser = async () => {
		const response = await api.get(`users/${USER_NAME}`)
		setUser(response.data)
	}

	const fetchPosts = useCallback(async (query: string = '') => {
		const response = await api.get(`/search/issues?q=${query}%20repo:${USER_NAME}/${REPO_NAME}`)
		setPosts(response.data.items)
	}, [posts])

	const fetchPostContent = useCallback(async (id?: string) => {
    const response = await api.get(`/repos/${USER_NAME}/${REPO_NAME}/issues/${id}`)
		setPostContent(response.data)
	},  [postContent])

	return (
		<GitHubContext.Provider
			value={{
				user,
				postContent,
				posts,
				fetchUser,
				fetchPosts,
				fetchPostContent,
			}}
		>
			{children}
		</GitHubContext.Provider>
	)
}
