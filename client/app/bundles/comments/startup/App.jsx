import React from 'react';
import { Provider } from 'react-redux';
import ReactOnRails from 'react-on-rails';

export default (_props, _railsContext) => {
  const store = ReactOnRails.getStore('commentsStore');

  return (
    <Provider store={store} />
  );
};
