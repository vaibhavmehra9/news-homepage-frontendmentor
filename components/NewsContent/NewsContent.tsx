import Button from 'components/Button';
import Image from 'next/image';
import styles from './NewsContent.module.css';

function NewsContent() {
  return (
    <main>
      <header>
        <Image
          src="/images/image-web-3-desktop.jpg"
          alt="news content"
          width="670"
          height="280"
          priority
          className={styles['news-content-desktop']}
        />
        <Image
          src="/images/image-web-3-mobile.jpg"
          alt="news content"
          width="469"
          height="280"
          priority
          className={styles['news-content-mobile']}
        />
      </header>
      <article className={styles['news-content-body']}>
        <h1 className={styles['news-content-header']}>
          The Bright Future of Web 3.0?
        </h1>
        <div>
          <p className={styles['news-content-desc']}>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling the promise?
          </p>
          <Button type="button">Read More</Button>
        </div>
      </article>
    </main>
  );
}

export default NewsContent;
