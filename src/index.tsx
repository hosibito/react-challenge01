import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reset } from 'styled-reset';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider  } from 'react-query';

import App from './App';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container as HTMLElement);
const queryClient = new QueryClient();


root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Reset />        
          <App />        
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,  
);


