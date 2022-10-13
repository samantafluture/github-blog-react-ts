import styled from 'styled-components'

export const PostContainer = styled.main`
	margin: -5.25rem auto 0 auto;
	max-width: 54rem;
	height: 100%;
`

export const PostInfoContainer = styled.div`
	background: ${(props) => props.theme['base-profile']};
	box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	padding: 2rem;
  
  h1 {
    margin-top: 1.25rem;
    color: ${(props) => props.theme['base-title']};
    /* font-size: 1.5rem; */
  }
`

export const PostNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  a {
    text-decoration: none;
    color: ${(props) => props.theme['brand-blue']};
    
    display: flex;
    gap: 0.25rem;
    justify-content: center;
		align-items: center;
    
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

export const PostDetails = styled.div`
  display: flex;
	margin-top: 1rem;
	gap: 2rem;
	color: ${(props) => props.theme['base-span']};

	div {
		display: flex;
    justify-content: space-between;
    align-items: center;
		gap: 0.5rem;

		svg {
			color: ${(props) => props.theme['base-label']};
		}
	}

`