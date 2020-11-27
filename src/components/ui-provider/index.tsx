import React, { FC } from 'react';
import '../../styles/tailwind.css';

const UiProvider: FC<{}> = ({ children }) => {
  return <div className="px-20 py-10">{children}</div>;
};

export default UiProvider;
