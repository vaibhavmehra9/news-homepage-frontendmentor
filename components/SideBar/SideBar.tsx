import Image from 'next/image';
import { SideBarT } from 'uitls/types';
import styles from './SideBar.module.css';

function SideBar({ children, onClose }: SideBarT) {
  return (
    <div className={styles['sidebar-overlay']}>
      <div className={styles.sidebar}>
        <div className={styles['sidebar-close-menu-btn-box']}>
          <Image
            src="/images/icon-menu-close.svg"
            alt="close menu button"
            width="30"
            height="30"
            onClick={onClose}
          />
        </div>
        <main className={styles['sidebar-body']}>{children}</main>
      </div>
    </div>
  );
}

export default SideBar;
