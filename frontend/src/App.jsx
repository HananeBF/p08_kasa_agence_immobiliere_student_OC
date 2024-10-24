import '@/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Router from '@/pages/Router';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Router />}/>
          
        </Routes>
      </BrowserRouter>
    
    </div >
  );
}

export default App;
