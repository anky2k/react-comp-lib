import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useContext,
  ReactNode
} from 'react';

type ThemeProviderType = {
  children: ReactNode;
};

function usePrevious<T>(theme: T) {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = theme;
  });
  return ref.current as T;
}

/* istanbul ignore next */

const ThemeContext = React.createContext({
  theme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {}
});

export const ThemeProvider: React.FC<ThemeProviderType> = ({ children }) => {
  // defaults to light theme
  const [theme, setTheme] = useState<string>('light');

  // set user's preferred color scheme on first load
  useLayoutEffect(() => {
    setTheme(
      !!window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    );
  }, []);

  // change theme
  const oldTheme = usePrevious(theme);

  useLayoutEffect(() => {
    document.documentElement.classList.remove(`theme-${oldTheme}`);
    document.documentElement.classList.add(`theme-${theme}`);
  }, [theme, oldTheme]);

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default () => useContext(ThemeContext);
