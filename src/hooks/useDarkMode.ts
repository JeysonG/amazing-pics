import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  /* State */

  const [mountedComponent, setMountedComponent]: [
    boolean,
    (result: boolean) => void
  ] = useState<boolean>(false);

  const [theme, setTheme]: [string, (result: string) => void] =
    useState<string>('light');

  /* Methods */

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler: () => void = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  /* UseEffect */

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
    setMountedComponent(true);
  }, []);

  return { theme, themeToggler, mountedComponent };
};
