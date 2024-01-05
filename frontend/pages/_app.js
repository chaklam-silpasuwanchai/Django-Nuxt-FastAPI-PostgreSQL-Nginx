import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/custom.scss';

export default function App({ Component, pageProps }) {
      return (
            <Component {...pageProps} />
      );
    }