import { CssVarsProvider } from '@mui/joy/styles'
import CssBaseline from '@mui/joy/CssBaseline'
import { theme, useCurrentTheme } from '../theme/theme'

export const Theme = ({ children }) => (
    <CssVarsProvider theme={theme} defaultMode='system'>
        {document.querySelector("meta[name='theme-color']").setAttribute('content', useCurrentTheme().head.themeColor)}
        <CssBaseline />
        {children}
    </CssVarsProvider>
)
