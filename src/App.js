import './styles/App.css';
import Navigation from './Navigation';
import Library from './Library';
import Run from './Run';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter basename='/TTMDemo'>
          <Routes>
            <Route path="/" element=
            {
              <div className="App">
                <Navigation />
                <Library />
              </div>
            } />
            <Route path="/run/:testName" element=
            {
              <div className="app-single">
                <div></div>
                <Run />
              </div>
            } />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
