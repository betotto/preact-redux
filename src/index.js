import { h, render } from 'preact';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

render(<Provider store={store}>
  <App nombre={12} />
</Provider>, document.getElementById('app'));
