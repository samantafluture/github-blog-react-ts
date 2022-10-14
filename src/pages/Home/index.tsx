import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { GitHubContext } from '../../contexts/GitHubContext'
import { dateFormatter } from '../../utils/formatter'
import { Profile } from './Profile'
import { HomeContainer, SearchContainer, PostGrid, PostCardContainer, PostCard } from './styles'

const searchFormSchema = z.object({
	query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function Home() {
	const { posts, fetchPosts } = useContext(GitHubContext)

	const { register, handleSubmit } = useForm<SearchFormInput>({
		resolver: zodResolver(searchFormSchema),
	})

	useEffect(() => {
		fetchPosts()
	}, [])

	async function handleSearchPost(data: SearchFormInput) {
		await fetchPosts(data.query)
	}
	
	return (
		<HomeContainer>
			<Profile />
			<SearchContainer>
				<div>
					<h2>Publications</h2>
					<span>{posts.length} publications</span>
				</div>
				<form onSubmit={handleSubmit(handleSearchPost)}>
					<input
						type='search'
						placeholder='Search content'
						{...register('query')}
					/>
				</form>
			</SearchContainer>
			<PostGrid>
				{posts.map((post) => {
					return (
						<PostCardContainer to={`/post/${post.number}`}>
							<PostCard key={post.id}>
									<div>
										<h3>{post.title}</h3>
										<span>
											{dateFormatter.format(
												new Date(post.created_at)
											)}
										</span>
									</div>
									<p>{post.body.substring(0, 200)}...</p>
							</PostCard>
						</PostCardContainer>
					)
				})}
			</PostGrid>
		</HomeContainer>
	)
}
