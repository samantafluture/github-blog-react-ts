import { useContext } from 'react'
import { GitHubContext } from '../../contexts/GitHubContext'
import { dateFormatter } from '../../utils/formatter'
import { Profile } from './Profile'
import { HomeContainer, SearchContainer, PostGrid, PostCard } from './styles'

export function Home() {
	const { posts } = useContext(GitHubContext)

	return (
		<HomeContainer>
			<Profile />
			<SearchContainer>
				<div>
					<h2>Publications</h2>
					<span>6 publications</span>
				</div>
				<form>
					<input type='search' placeholder='Search content' />
				</form>
			</SearchContainer>
			<PostGrid>
				{posts.map((post) => {
					return (
						<PostCard key={post.id}>
							<div>
								<h3>
									{post.title}
								</h3>
								<span>{dateFormatter.format(new Date(post.created_at))}</span>
							</div>
							<p>
								{post.body.substring(0,200)}...
							</p>
						</PostCard>
					)
				})}
				</PostGrid>
		</HomeContainer>
	)
}
