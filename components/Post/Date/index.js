import {
  formatPublishedDateForDateTime,
  formatPublishedDateForDisplay,
} from "@utils/Date";

import styles from "./Date.module.scss";

export default function PublishedDate(props) {
  const { date } = props;

  return (
    <time
      className={styles.publishedDate}
      dateTime={formatPublishedDateForDateTime(date)}
    >
      {formatPublishedDateForDisplay(date)}
    </time>
  );
}