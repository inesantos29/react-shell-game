import { ThemeProvider, createTheme } from '@mui/material/styles'
import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core"
import CasinoIcon from '@mui/icons-material/Casino'
import Header from './components/Header'
import GameEngine from './components/GameEngine'


const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#f4f5fd"
    },
  }
})


function App() {

  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
        <Typography variant="h6" noWrap>
          ONFIDO | The Game Shell 
        </Typography>
      </Toolbar>
      </AppBar>
   
      <Header
        title="Inês Catana 🥷"
        subTitle="React Shell Game"
        icon={
          <CasinoIcon fontSize="large" />
        }
      />
      <div className="h-screen flex bg-indigo-300 text-white">
        <div className="relative mx-auto px-5 md:px-12 w-11/12 md:w-3/4 bg-indigo-400 flex flex-wrap justify-center py-10">
          <GameEngine/>
        </div>
      </div>
    </ThemeProvider>
  
  )
}

export default App