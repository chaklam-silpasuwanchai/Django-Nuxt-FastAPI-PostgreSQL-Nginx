import React from 'react';

import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.scss';
import App from './App';

// Don't write any code here!!

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <App />
);