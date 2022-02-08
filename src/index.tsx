import ReactDOM from 'react-dom';
import App from './App';
import GlobalThemeProvider from './theme/GlobalThemeProvide';

ReactDOM.render(
  <GlobalThemeProvider>
    <App />
  </GlobalThemeProvider>,

  document.getElementById('root')
);
