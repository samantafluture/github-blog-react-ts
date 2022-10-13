import styled from 'styled-components'

export const HomeContainer = styled.main`
	margin: -5.25rem 18rem 14.625rem;
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
			color: ${props => props.theme['base-subtitle']};
		}
	}
	
	form > input {
		width: 100%;
		
		color: ${props => props.theme['base-span']};
		font-size: 0.875rem ;
		border-radius: 6px;
		border: 1px solid ${props => props.theme['base-border']};
		background: ${props => props.theme['base-input']};
		padding: 0.75rem 1rem;
		
		&::placeholder {
			color: ${props => props.theme['base-label']};
		}
		
	}
`
