import { useEffect, useState } from 'react';

export const useLocalStorage = <Type>(
  initState: Type,
  localStorageKey: string
) => {
  const [state, setState] = useState<Type>(initState);
  useEffect(() => {
    const stateLocalStorageRaw = localStorage.getItem(localStorageKey);
    if (!stateLocalStorageRaw) {
      localStorage.setItem(localStorageKey, JSON.stringify(initState));
    } else {
      setState(JSON.parse(stateLocalStorageRaw) as Type);
    }
  }, [initState, localStorageKey]);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [localStorageKey, state]);
  return [state, setState] as const;
};
