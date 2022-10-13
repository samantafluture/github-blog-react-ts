import styled from 'styled-components'

export const HomeContainer = styled.main`
	margin: -5.25rem auto 0 auto;
	max-width: 54rem;
	height: 100%;
`

export const SearchContainer = styled.div`
	margin: 4.5rem auto 3rem;

	width: 100%;
	background: transparent;

	display: flex;
	flex-direction: column;
	gap: 0.75rem;

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;

		width: 100%;

		h2 {
			font-weight: 700;
			font-size: 1.125rem;
			color: ${(props) => props.theme['base-subtitle']};
		}
	}

	form > input {
		width: 100%;

		color: ${(props) => props.theme['base-span']};
		font-size: 0.875rem;
		border-radius: 6px;
		border: 1px solid ${(props) => props.theme['base-border']};
		background: ${(props) => props.theme['base-input']};
		padding: 0.75rem 1rem;

		&::placeholder {
			color: ${(props) => props.theme['base-label']};
		}
	}
`
export const PostGrid = styled.div`
	padding-bottom: 8rem;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;
`

export const PostCard = styled.div`
	background: ${(props) => props.theme['base-post']};
	border-radius: 10px;
	padding: 2rem;       

	div {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;

		h3 {
			font-size: 1.25rem;
			font-weight: 700;
			color: ${(props) => props.theme['base-title']};
			width: 75%;
		}

		span {
			font-size: 0.875rem;
			color: ${(props) => props.theme['base-span']};
			
		}
	}

	p {
		margin-top: 1.25rem;
		font-size: 1rem;
		color: ${(props) => props.theme['base-text']};
	}
`
