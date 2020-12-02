import React, { FC } from 'react';
import '../../styles/tailwind.css';
import { ThemeProvider } from '../../hooks/theme-provider';

const UiProvider: FC<{}> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="px-20 py-10">{children}</div>
    </ThemeProvider>
  );
};

export default UiProvider;
