import { useEffect, useState } from 'react'

export const useThrottle = (fn: Function, ms = 30, deps = []) => {
  const [previous, setPrevious] = useState(0);
  const [time, setTime] = useState(ms);
  useEffect(() => {
      let now = Date.now();
      if (now - previous > time) {
          fn();
          setPrevious(now);
      }
  }, deps);

  const cancel = () => {
      setTime(0)
  };

  return [cancel];
}
