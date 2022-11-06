import Articles from 'components/Articles';
import NewsContent from 'components/NewsContent';
import NewsTrend from 'components/NewsTrend';
import { useEffect, useState } from 'react';
import API from 'uitls/api';
import { ArticleT, NewsTrendT } from 'uitls/types';
import Layout from '../components/Layout';
import styles from '../styles/index.module.css';

export default function Home() {
  const [newsTrend, setNewsTrend] = useState<NewsTrendT[]>([]);
  const [articles, setArticles] = useState<ArticleT[]>([]);

  useEffect(() => {
    API.getNewsTrend()
      .then((res) => setNewsTrend(Object.values(res)))
      .catch(() => setNewsTrend([]));

    API.getArticles()
      .then((res) => setArticles(Object.values(res)))
      .catch(() => setArticles([]));
  }, []);

  return (
    <Layout>
      <section className={styles['news-section']}>
        <NewsContent />
        <NewsTrend newsTrend={newsTrend} />
      </section>
      <section>
        <Articles articles={articles} />
      </section>
    </Layout>
  );
}
