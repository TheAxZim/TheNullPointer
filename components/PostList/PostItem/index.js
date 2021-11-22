import Link from 'next/link';
import { Config } from '@utils/Config';
import Tags from '@components/Post/Tags';
import PublishedDate from '@components/Post/Date';

import styles from './PostItem.module.scss';

export default function PostItem(props) {

  const {id, title, date, excerpt, tags, slug} = props;
  
  return (
    <li key={id} className={styles.post}>
      <Link href={`${Config.pageMeta.blogIndex.slug}/${slug}`} passHref>
        <div>
          <div className={styles.postDecorator}>
            <div className={`${styles.circle} ${styles.c1}`}></div>
            <div className={`${styles.circle} ${styles.c2}`}></div>
            <div className={`${styles.circle} ${styles.c3}`}></div>
          </div>
          <article className={styles.postContent}>
            <h1 className={styles.postTitle}>{title}</h1>
            <PublishedDate date={date} />
            {tags !== null && <Tags tags={tags} />}
            <p className={styles.excerpt}>{excerpt}</p>
          </article>
        </div>
      </Link>
    </li>
  );
}