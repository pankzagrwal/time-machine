import React from 'react';
import ReactDOM from 'react-dom/client';
import CountryOptions from './countryOptions/countryOptions';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div>
      <CountryOptions />
    </div>
  </React.StrictMode>
);