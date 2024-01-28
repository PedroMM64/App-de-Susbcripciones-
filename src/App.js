import './App.css';
import Header from './componentes/Header';
import FormPresupuesto from './componentes/FormPresupuesto'
import { useState } from 'react';
import MainControl from './componentes/MainControl';

function App() {
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const component = isValid ? <MainControl count={count} /> : <FormPresupuesto setCount = { setCount } setIsValid = { setIsValid } />;

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        { component }
      </header>
    </div>
  );
}

export default App;
