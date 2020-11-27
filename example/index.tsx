import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../.';
import './styles/tailwind.css';

const App = () => {
  return (
    <div>
      <Button label={"Hello World"} outlined={false} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
