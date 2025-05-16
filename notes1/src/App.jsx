import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoadingScreen from './loadingscreen'
import { useDelayedLoading } from './delayedloading'

function App() {
  const [count, setCount] = useState(0)
  const [loading, stopLoading, startLoading] = useDelayedLoading(true, 2000);

  // Import the useEffect hook from React
  useEffect(() => {
    const timer = setTimeout(() => {
      stopLoading();
    }, 1500);

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = () => {
    // Start loading again
    startLoading();
    setCount(0); // Reset count to 0
    const timer = setTimeout(() => {
      stopLoading();
    }, 1500); // Slightly longer than the delay to ensure it shows properly
    stopLoading();
    return () => clearTimeout(timer);
    // Ensure minimum loading time when refreshing
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <h1>hello</h1>
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <img src={reactLogo} className="logo react" alt="React logo" />
      <p>Vite + React</p>
      <button className="btn" onClick={handleRefresh}>refresh</button>
      <button className="btn" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  )
}

export default App
