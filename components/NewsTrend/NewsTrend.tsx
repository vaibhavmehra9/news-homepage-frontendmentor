import { NewsTrendT } from 'uitls/types';
import styles from './NewsTrend.module.css';

function NewsTrend({ newsTrend = [] }: { newsTrend: NewsTrendT[] }) {
  if (!newsTrend.length) {
    return <div></div>;
  }

  return (
    <aside className={styles['news-trend']}>
      <header className={styles['news-trend-header']}>New</header>
      {newsTrend.map((item) => {
        return (
          <article key={item.title} className={styles['news-trend-item']}>
            <h2 className={styles['news-trend-item-header']}>{item.title}</h2>
            <p className={styles['news-trend-item-desc']}>{item.description}</p>
          </article>
        );
      })}
    </aside>
  );
}

export default NewsTrend;
