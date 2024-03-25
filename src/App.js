import './styles/App.css';
import Navigation from './Navigation';
import Library from './Library';
import Results from './Results';
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

          <Route path="/library" element=
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

          <Route path="/results" element=
            {
              <div className="App">
                <Navigation />
                <Results />
              </div>
            } />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
