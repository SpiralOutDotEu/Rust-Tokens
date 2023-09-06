import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Helmet from 'react-helmet'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
      <title>Rust Tokens</title>
      <meta name="description" content="Rust Tokens" />
      <meta name="title" key="title" content="Rust Tokens" />
      <meta property="og:title" key="og:title" content="Rust Tokens" />
      <meta property="og:locale" key="og:locale" content="en_US" />
      <meta charSet="utf-8" />
      <meta property="og:type" key="og:type" content="website" />
      <meta
        property="og:description"
        key="og:description"
        content="Rust Tokens"
      />
      <meta
        property="og:image"
        key="og:image"
        content="https://rust-tokens.vercel.app/rusterc20.png"
      />
    </Helmet>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
