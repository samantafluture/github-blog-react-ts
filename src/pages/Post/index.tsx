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
	PostContent,
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
			<PostContent>
				<p>
					<span>
						Programming languages all have built-in data structures,
						but these often differ from one language to another.{' '}
					</span>
					This article attempts to list the built-in data structures
					available in JavaScript and what properties they have. These
					can be used to build other data structures. Wherever
					possible, comparisons with other languages are drawn.
				</p>
				<h2>Dynamic typing </h2>
				<p>
					JavaScript is a loosely typed and dynamic language.
					Variables in JavaScript are not directly associated with any
					particular value type, and any variable can be assigned (and
					re-assigned) values of all types:
				</p>
				<pre>
					{`
            foo = ‘bar’; // foo is now a string 
            foo = true; // foo is now a boolean
          `}
				</pre>
			</PostContent>
		</PostContainer>
	)
}
;``
