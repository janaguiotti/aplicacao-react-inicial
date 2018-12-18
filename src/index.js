import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Aplicação inicial ReactJS com Webpack, Babel, ESLint e Airbnb Style Guide configurados';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();