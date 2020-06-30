import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Luc Mosser | Developer Portfolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Luc Mosser | Developer Portfolio'} />
      </Helmet>
      <App />
    </div>
  );
};
