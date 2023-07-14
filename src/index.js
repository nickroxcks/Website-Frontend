import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// scroll bar
//import 'simplebar/src/simplebar.css';

// third-party
import { Provider as ReduxProvider } from 'react-redux';

// apex-chart
import './assets/third-party/apex-chart.css';

// project import
import App from './App';
import { store } from './store/index';
//import reportWebVitals from './reportWebVitals';

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter> {/*<BrowserRouter basename="/free"> */}
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
/*
1) When it comes to redux, you must wrap your components that want to use the redux store, with a provider
2) Since we are also using react router, we also want to define the router we are using. 
*/