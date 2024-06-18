import SimpleCounter from './assets/components/clock'
import './App.css'
import { useState,useEffect } from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <SimpleCounter seconds={seconds} />
    </div>
  );
}

export default App;