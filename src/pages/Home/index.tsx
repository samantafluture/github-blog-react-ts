import { Profile } from './Profile'
import { HomeContainer, SearchContainer } from './styles'

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
          <input type="search" placeholder='Search content' />
        </form>
			</SearchContainer>
		</HomeContainer>
	)
}
