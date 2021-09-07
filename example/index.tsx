import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, Switcher } from '../.';
import './styles/tailwind.css';

const App = () => {
  return (
    <div>
      <Button
        onClick={() => console.log('hello world')}
        label={'Hello World'}
        outlined={false}
      />
      <Switcher/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
