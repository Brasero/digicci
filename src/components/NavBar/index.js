import { useTheme } from '@emotion/react'
import { styled } from '@mui/system'

function NavBar() {
  const { theme } = useTheme()

  const StyledText = styled('h1')(({ theme }) => ({
    background: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
    textAlign: 'center'
  }))

  return (
    <div>
      <div>
        <StyledText theme={theme}>NavBar</StyledText>
      </div>
    </div>
  )
}

export default NavBar
