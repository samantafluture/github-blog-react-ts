import { Profile } from './Profile'
import { HomeContainer, SearchContainer, PostGrid, PostCard } from './styles'

export function Home() {
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
				<PostCard>
					<div>
						<h3>JavaScript data types and data structures</h3>
						<span>1 day ago</span>
					</div>
					<p>
						Programming languages all have built-in data structures,
						but these often differ from one language to another.
						This article attempts to list the built-in data
						structures available in...
					</p>
				</PostCard>
				<PostCard>
					<div>
						<h3>JavaScript data types and data structures</h3>
						<span>1 day ago</span>
					</div>
					<p>
						Programming languages all have built-in data structures,
						but these often differ from one language to another.
						This article attempts to list the built-in data
						structures available in...
					</p>
				</PostCard>
				<PostCard>
					<div>
						<h3>JavaScript data types and data structures</h3>
						<span>1 day ago</span>
					</div>
					<p>
						Programming languages all have built-in data structures,
						but these often differ from one language to another.
						This article attempts to list the built-in data
						structures available in...
					</p>
				</PostCard>
				<PostCard>
					<div>
						<h3>JavaScript data types and data structures</h3>
						<span>1 day ago</span>
					</div>
					<p>
						Programming languages all have built-in data structures,
						but these often differ from one language to another.
						This article attempts to list the built-in data
						structures available in...
					</p>
				</PostCard>
			</PostGrid>
		</HomeContainer>
	)
}
