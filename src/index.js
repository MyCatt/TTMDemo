import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Joyride, { BeaconRenderProps, TooltipRenderProps } from 'react-joyride';

const steps = [
  {
    target: '.nav-LIBRARY',
    content: 'This is the Library tab. You can find all your test cases here.',
  },
  {
    target: '.library-header__left',
    content: 'This is the platforms tab. You can find all the platforms here. Let\'s go to the Finance & Operations tab.',
  },
  {
    target: '.version',
    content: 'The version dropdown lets us jump between testing different versions of Finance & Operations. TheTestMart manages a library of base test and commands between these versions so that you don\'t need to spend hours tinkering with your tests each time Microsoft change something.',
  }
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Joyride 
      steps={steps} 
      continuous={true} 
      run={true} 
      showProgress={true} 
      styles={{
        options: {
          arrowColor: '#fff',
          backgroundColor: '#fff',
          overlayColor: 'rgba(0, 0, 0, 0.4)',
          primaryColor: 'yellow',
          textColor: '#000',
          beaconSize: 50,
          zIndex: 1000,
        },
      }}
    />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
