import * as React from 'react';
import App from './_app'
import './input.css'
import './index.css'

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);