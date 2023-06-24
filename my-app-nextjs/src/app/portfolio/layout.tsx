import React, { ReactNode } from 'react';
import styles from './page.module.css';

interface LayoutProps {
  children: ReactNode; // or JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  );
}

export default Layout;
