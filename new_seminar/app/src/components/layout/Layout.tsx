import type { ReactNode } from 'react';
import Header from './Header';
import ModuleStrip from './ModuleStrip';
import styles from './Layout.module.css';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <ModuleStrip />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
