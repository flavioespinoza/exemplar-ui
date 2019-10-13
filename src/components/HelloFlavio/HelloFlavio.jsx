import * as React from 'react';

const HelloFlavio = (props) => {
  const children = props.children ? <span>{props.children}</span> : false;
  return (
    <div>
      <h1>Hello Flavio!</h1>
      {children}
    </div>
  );
};
export default HelloFlavio;
