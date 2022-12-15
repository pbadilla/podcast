import React from 'react';
import { GlobalStyles } from './src/styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <div style={{ textAlign: 'center' }}>
        <h1>Hello world!</h1>
        <a className='link' href=''>
          VRST Boilerplate
        </a>
        <p>(Vite.js, React.js, Styled-Components, and Typescript)</p>
      </div>
    </>
  );
};

export default App;
