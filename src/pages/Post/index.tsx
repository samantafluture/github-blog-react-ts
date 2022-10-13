import {
	ArrowSquareUpRight,
	CalendarBlank,
	CaretLeft,
	ChatCircle,
	GithubLogo,
} from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import {
	PostContainer,
	PostInfoContainer,
	PostNav,
	PostDetails,
} from './styles'

export function Post() {
	return (
		<PostContainer>
			<PostInfoContainer>
				<PostNav>
					<NavLink to='/'>
						<CaretLeft size={16} />
						<span>Go back</span>
					</NavLink>
					<a href='https://github.com/samantafluture' target='_blank'>
						<span>See it on Github</span>
						<ArrowSquareUpRight size={16} />
					</a>
				</PostNav>
				<h1>JavaScript data types and data structures</h1>
				<PostDetails>
					<div>
						<GithubLogo size={18} />
						<span>samantafluture</span>
					</div>
					<div>
						<CalendarBlank size={18} />
						<span>1 day ago</span>
					</div>
					<div>
						<ChatCircle size={18} />
						<span>5 comments</span>
					</div>
				</PostDetails>
			</PostInfoContainer>
		</PostContainer>
	)
}
;``
