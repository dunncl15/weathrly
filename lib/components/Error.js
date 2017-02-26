import React from 'react';

const NotFound = ({ error }) => {
  return (
    <section className="errors">
      <h3>{ error }.</h3>
    </section>
  );
};

export default NotFound;
