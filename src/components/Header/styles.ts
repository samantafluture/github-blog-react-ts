import styled from 'styled-components'
import effects from '../../assets/bg-effects.svg'

export const HeaderContainer = styled.header`
	height: 18.5rem;
  width: 100%;
  
  background-image: url(${effects});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover; 
  
  background-color: ${(props) => props.theme['base-profile']};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  display: flex;
	justify-content: center;
	align-items: center;
  
	img {
		margin: 4rem auto 8.375rem;
	}
`
