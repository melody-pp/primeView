export const sample = arr => arr[Math.floor(Math.random() * arr.length)]
export const debounce = (func, wait = 100) => {
  let timeout

  return () => {
    clearTimeout(timeout)
    timeout = setTimeout(func, wait)
  };
};

export default {sample, debounce}
