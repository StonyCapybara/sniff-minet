import { useCallback } from 'react';

export function useLocalStorageSetItem() {
  const setItem = useCallback((key: string, value: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, []);

  return setItem;
}

export function useLocalStorageGetItem() {
  const getItem = useCallback((key: string) => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : null;
    }
    return null;
  }, []);

  return getItem;
}

export function useLocalStorageClear() {
  const clearItem = useCallback((key: string = "") => {
    if (typeof window !== 'undefined') {
      if (key) {
        localStorage.removeItem(key);
      } else {
        localStorage.clear();
      }
    }
  }, []);

  return clearItem;
}
