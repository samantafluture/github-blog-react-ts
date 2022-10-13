import styled from 'styled-components'

export const ProfileContainer = styled.div`
	background: ${(props) => props.theme['base-profile']};
	box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	padding: 2rem 2.5rem;
	position: relative;

	a {
		display: flex;
		gap: 0.25rem;
		justify-content: center;
		align-items: center;

		position: absolute;
		top: 40px;
		right: 32px;
		text-decoration: none;
		color: ${(props) => props.theme['brand-blue']};

		span {
			text-transform: uppercase;
			font-size: 0.75rem;
			font-weight: 700;
		}

		&:hover {
			border-bottom: 1px solid ${(props) => props.theme['brand-blue']};
		}
	}
`

export const ProfileInfo = styled.div`
	display: flex;

	img {
		width: 9.25rem;
		height: 9.25rem;
		border-radius: 8px;
	}
`

export const ProfileContent = styled.div`
	margin-left: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	h2 {
		color: ${(props) => props.theme['base-title']};
	}

	p {
		margin-top: 0.5rem;
	}
`
export const ProfileFooter = styled.div`
	display: flex;
	margin-top: 1.5rem;
	gap: 1.5rem;
	color: ${(props) => props.theme['base-subtitle']};

	div {
		display: flex;
		gap: 0.5rem;

		svg {
			color: ${(props) => props.theme['base-label']};
		}
	}
`
