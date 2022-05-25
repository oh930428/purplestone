import App from './App';
import ReactDOM from 'react-dom/client';

import { store } from './store/index';
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from 'react-query';
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
);
