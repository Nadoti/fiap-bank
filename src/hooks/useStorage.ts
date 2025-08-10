import { useCallback } from 'react';

export function useLocalStorage() {

  const getStorage = useCallback(<T>(key: string): T | null => {
    if (typeof window === 'undefined') return null;
   
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Erro ao ler localStorage:', error);
      return null;
    }
  }, []);

  const setStorage = useCallback(<T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return;
   
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Erro ao salvar no localStorage:', error);
    }
  }, []);


  const removeStorage = useCallback((key: string) => {
    if (typeof window === 'undefined') return;
   
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Erro ao remover do localStorage:', error);
    }
  }, []);

  return {
    getStorage,
    setStorage,
    removeStorage,
  };
}