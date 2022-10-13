import { createContext, ReactNode, useEffect, useState } from 'react'
import { API_USER } from '../lib/axios'

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

interface GitHubContextType {
	user: User
	fetchUser: () => Promise<void>
}

interface GitHubProviderProps {
	children: ReactNode
}

export const GitHubContext = createContext({} as GitHubContextType)

export function GitHubProvider({ children }: GitHubProviderProps) {
	const [user, setUser] = useState<User>({
		id: 0,
		name: ' ',
		login: ' ',
		avatar_url: ' ',
		html_url: ' ',
		followers: 0,
		bio: ' ',
		company: ' ',
	})

	const fetchUser = async () => {
		const response = await API_USER.get('samantafluture')
		setUser(response.data)
	}

	useEffect(() => {
		fetchUser()
	}, [fetchUser])

	return (
		<GitHubContext.Provider value={{ user, fetchUser }}>
			{children}
		</GitHubContext.Provider>
	)
}
