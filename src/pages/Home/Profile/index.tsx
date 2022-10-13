import {
	ArrowSquareUpRight,
	Buildings,
	GithubLogo,
	Users,
} from 'phosphor-react'
import {
	ProfileContainer,
	ProfileFooter,
	ProfileInfo,
	ProfileContent,
} from './styles'

export function Profile() {
	return (
		<ProfileContainer>
			<a href='https://github.com/samantafluture' target='_blank'>
				<span>Github</span>
				<ArrowSquareUpRight size={16} />
			</a>
			<ProfileInfo>
				<img src='https://github.com/samantafluture.png' />
				<ProfileContent>
					<h2>Samanta Fluture</h2>
					<p>
						I’m a passionate developer with a strong interest in
						creating awesome + accessible interfaces.
					</p>
					<ProfileFooter>
						<div>
							<GithubLogo size={18} />
							<span>samantafluture</span>
						</div>
						<div>
							<Buildings size={18} />
							<span>Turbulent</span>
						</div>
						<div>
							<Users size={18} />
							<span>38 followers</span>
						</div>
					</ProfileFooter>
				</ProfileContent>
			</ProfileInfo>
		</ProfileContainer>
	)
}
