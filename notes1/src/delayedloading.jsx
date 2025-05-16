import { useState, useEffect, useRef } from 'react';

/**
 * A custom React hook that provides a delayed loading state.
 * Ensures loading states last for at least the specified minimum duration.
 * 
 * @param {boolean} initialState - The initial loading state (default: true)
 * @param {number} delay - The minimum duration in milliseconds for the loading state (default: 1000ms)
 * @returns {[boolean, Function, Function]} - A tuple containing:
 *   1. The current loading state
 *   2. A function to stop loading (with minimum duration enforced)
 *   3. A function to start loading
 */
export function useDelayedLoading(initialState = true, delay = 1000) {
  // Track loading state
  const [loading, setLoading] = useState(initialState);
  
  // Store the timestamp when loading started
  const startTime = useRef(Date.now());

  /**
   * Stops the loading state after ensuring it has been shown for at least 'delay' ms
   * If the minimum time hasn't elapsed, it will wait for the remaining time
   */
  const stopLoading = () => {
    const elapsed = Date.now() - startTime.current;
    const waitTime = delay - elapsed;
    
    if (waitTime > 0) {
      // If we haven't shown loading for long enough, wait for the remaining time
      setTimeout(() => setLoading(false), waitTime);
    } else {
      // If we've already shown loading longer than the minimum time, stop immediately
      setLoading(false);
    }
  };

  /**
   * Starts the loading state and resets the timer
   */
  const startLoading = () => {
    startTime.current = Date.now();
    setLoading(true);
  };

  return [loading, stopLoading, startLoading];
}
