const useTimeout = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export { useTimeout };
