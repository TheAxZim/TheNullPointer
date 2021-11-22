import styles from "./BlogHeader.module.scss";
import Tags from "@components/Post/Tags";
import PublishedDate from "@components/Post/Date";

export default function BlogHeader(props) {
  const {title, date, tags} = props;

  return (
    <div className={styles.blogHeader}>
      <h1>{title}</h1>
      <div className={styles.dateHolder}>
        <PublishedDate date={date} />
      </div>
      <div className={styles.tagContainer}>
        {tags !== null && <Tags tags={tags} />}
      </div>
    </div>
  );
}