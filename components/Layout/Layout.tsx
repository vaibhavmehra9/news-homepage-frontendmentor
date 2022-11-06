import { LayoutT } from 'uitls/types';
import Header from '../Header';
import styles from './Layout.module.css';

function Layout({ children }: LayoutT) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
