import React from 'react'
import styles from '../styles/mainPage.module.css'

interface Theme {
  isNight: Boolean;
  toggleTheme: () => void;
}

// true: night theme
// false: light theme
export const ThemeContext = React.createContext<Theme>({
  isNight: false,
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }: any) => {
  const [theme, setTheme] = React.useState(false);
  return (
    <ThemeContext.Provider
      value={{
        isNight: theme,
        toggleTheme: () => setTheme(!theme),
      }}
    >
      <div className={theme ? styles.body_night : ''}>{children}</div>
    </ThemeContext.Provider>
  );
}