import Image from 'next/image';
import { ArticleT } from 'uitls/types';
import styles from './Articles.module.css';

function Articles({ articles }: { articles: ArticleT[] }) {
  return (
    <section className={styles.articles}>
      {articles.map((article) => {
        return (
          <div key={article.id} className={styles.article}>
            <Image
              src={article.img}
              alt={article.title}
              width={'86'}
              height={'110'}
            />
            <div className={styles['article-body']}>
              <div className={styles['article-num']}>{article.id}</div>
              <h2 className={styles['article-title']}>{article.title}</h2>
              <p className={styles['article-desc']}>{article.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Articles;
