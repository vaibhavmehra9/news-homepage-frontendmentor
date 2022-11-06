import NavBar from '../NavBar';
import Image from 'next/image';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Image
        src={'/images/logo.svg'}
        alt=""
        width="50"
        height="30"
        className={styles.logo}
      />
      <NavBar />
    </header>
  );
}

export default Header;
