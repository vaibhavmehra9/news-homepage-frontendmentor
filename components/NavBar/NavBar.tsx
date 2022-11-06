import Link from 'next/link';
import { useEffect, useState } from 'react';
import API from 'uitls/api';
import SideBar from 'components/SideBar';
import { RoutesT } from 'uitls/types';
import Image from 'next/image';
import styles from './NavBar.module.css';

function NavBar() {
  const [routes, setRoutes] = useState<RoutesT>([]);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (routes.length) {
      return;
    }
    API.getRoutes()
      .then((res) => {
        setRoutes(Object.values(res));
      })
      .catch((err) => {
        setRoutes([]);
      });
  }, []);

  const body = routes.map((eachRoute) => (
    <Link
      href={eachRoute.url}
      key={eachRoute.title}
      className={styles['navbar-item']}
    >
      {eachRoute.title}
    </Link>
  ));

  return (
    <nav>
      <div className={styles['navbar-desktop']}>{body}</div>
      <Image
        src="/images/icon-menu.svg"
        alt="menu button"
        width="50"
        height="20"
        onClick={() => {
          setOpen(true);
        }}
        priority
        className={styles['sidebar-btn']}
      />

      {open && <SideBar onClose={() => setOpen(false)}>{body}</SideBar>}
    </nav>
  );
}

export default NavBar;
