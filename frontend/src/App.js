import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <Router>
      <center>
        <Navbar />
      </center>
      
      <div className='w-screen p-2'>
        <QueryClientProvider client = {queryClient}>
          <Routes>
            <Route path = '/' 
            element = {<Home />}
            />
          </Routes>
        </QueryClientProvider>        
      </div>


      </Router>
      
    </div>
  );
}

export default App;
