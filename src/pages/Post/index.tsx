import {
	ArrowSquareUpRight,
	CalendarBlank,
	CaretLeft,
	ChatCircle,
	GithubLogo,
} from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { GitHubContext } from '../../contexts/GitHubContext'
import { dateFormatter } from '../../utils/formatter'
import {
	PostContainer,
	PostInfoContainer,
	PostNav,
	PostDetails,
	PostContent,
} from './styles'

export function Post() {
	const { postContent, fetchPostContent } = useContext(GitHubContext)
	const { id } = useParams()

	useEffect(() => {
		fetchPostContent(id)
	}, [])
	
	return (
		<PostContainer>
			<PostInfoContainer>
				<PostNav>
					<NavLink to='/'>
						<CaretLeft size={16} />
						<span>Go back</span>
					</NavLink>
					<a href={postContent.html_url} target='_blank'>
						<span>See it on Github</span>
						<ArrowSquareUpRight size={16} />
					</a>
				</PostNav>
				<h1>{postContent.title}</h1>
				<PostDetails>
					<div>
						<GithubLogo size={18} />
						<span>{postContent.user.login}</span>
					</div>
					<div>
						<CalendarBlank size={18} />
						<span>
							{dateFormatter.format(
								new Date(postContent.created_at)
							)}
						</span>
					</div>
					<div>
						<ChatCircle size={18} />
						<span>{postContent.comments} comments</span>
					</div>
				</PostDetails>
			</PostInfoContainer>
			<PostContent>{postContent.body}</PostContent>
		</PostContainer>
	)
}
