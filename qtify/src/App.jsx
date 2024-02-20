import { useState } from 'react' 
import './App.css'
import { StyledEngineProvider } from '@mui/material/styles';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
     <StyledEngineProvider injectFirst>
      {/* Your component tree. Now you can override Material UI's styles. */}
   <Navbar />
   <Hero/>
    </StyledEngineProvider>
  
   </>
  )
}

export default App
