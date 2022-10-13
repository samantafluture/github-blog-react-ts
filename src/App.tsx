import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GitHubProvider } from './contexts/GitHubContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<GitHubProvider>
					<Router />
				</GitHubProvider>
			</BrowserRouter>
			<GlobalStyle />
		</ThemeProvider>
	)
}
