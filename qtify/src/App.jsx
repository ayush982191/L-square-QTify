import { useState } from 'react' 
import './App.css'
import { StyledEngineProvider } from '@mui/material/styles'; 
 import LandingPage from './pages/LandingPage/LandingPage';
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
     <StyledEngineProvider injectFirst>
      <LandingPage/>
    
    </StyledEngineProvider>
  
   </>
  )
}

export default App
