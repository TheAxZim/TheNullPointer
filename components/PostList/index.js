import Pagination from "./Pagination";
import PostItem from "./PostItem";
import styles from "./PostList.module.scss";

export default function PostList(props) {
  const { posts, currentPage, totalPages } = props;
  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
  const prevDisabled = parseInt(currentPage, 10) === 1;

  return (
    <>
      <ol className={styles.postList}>
        {
          posts.map((post) =>
              <PostItem 
                id={post.sys.id}
                slug={post.slug}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                tags={post.tags}
              />)
        }
      </ol>

      <Pagination 
        totalPages={totalPages}
        currentPage={currentPage}
        nextDisabled={nextDisabled}
        prevDisabled={prevDisabled}
      />
    </>
  );
}