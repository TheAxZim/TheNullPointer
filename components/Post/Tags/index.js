import styles from "./Tags.module.scss";

export default function Tags(props) {
  const { tags } = props;

  return (
    <ul className={styles.tags}>
      {tags.map((tag) => (
          <li className={styles.tag} key={tag}>
            {tag}
          </li>
        )
      )}
    </ul>
  );
}