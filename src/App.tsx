import './App.css'
import {Box , Container , Heading , Text , Card ,Flex , Avatar , Badge , Separator} from '@radix-ui/themes'
import Navigaton from './components/Navigation'
import Home from './page/Home'
import Profile from './page/Profile'
import {Routes,Route} from 'react-router-dom'
import Experience from './page/Experience'

function App() {


  return (
    <Box>
      <Navigaton></Navigaton>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/experience" element={<Experience/>}/>
      </Routes>
    </Box>
    
  )
}

export default App
