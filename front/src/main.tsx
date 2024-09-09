import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Button } from './components/ui/button';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      <Button
        onClick={() => {
          alert('Hello, world!');
        }}
      >
        Click me
      </Button>
    </div>
  </React.StrictMode>,
);
