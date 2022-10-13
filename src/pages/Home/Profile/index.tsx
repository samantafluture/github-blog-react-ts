import {
	ArrowSquareUpRight,
	Buildings,
	GithubLogo,
	Users,
} from 'phosphor-react'
import { useContext } from 'react'
import { GitHubContext } from '../../../contexts/GitHubContext'
import {
	ProfileContainer,
	ProfileFooter,
	ProfileInfo,
	ProfileContent,
} from './styles'

export function Profile() {
	const { user } = useContext(GitHubContext)
	
	return (
		<ProfileContainer>
			<a href={user.html_url} target='_blank'>
				<span>Github</span>
				<ArrowSquareUpRight size={16} />
			</a>
			<ProfileInfo>
				<img src={user.avatar_url} />
				<ProfileContent>
					<h2>{user.name}</h2>
					<p>
						{user.bio}
					</p>
					<ProfileFooter>
						<div>
							<GithubLogo size={18} />
							<span>{user.login}e</span>
						</div>
						<div>
							<Buildings size={18} />
							<span>{user.company}</span>
						</div>
						<div>
							<Users size={18} />
							<span>{user.followers} followers</span>
						</div>
					</ProfileFooter>
				</ProfileContent>
			</ProfileInfo>
		</ProfileContainer>
	)
}
