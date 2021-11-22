import MainLayout from '@layouts/MainLayout'
import PageMeta from '@components/PageMeta';
import { Config } from '@utils/Config';
import ContentfulApi from '@utils/ContentfulApi';
import PostList from '@components/PostList';

export default function Blog(props) {
    const {
        postSummaries,
        currentPage,
        totalPages,
        pageContent,
        preview,
      } = props;

    const pageTitle = pageContent ? pageContent.title : "Blog";
    const pageDescription = pageContent
        ? pageContent.description
        : "Articles | The Null Pointer";

    return (
        <MainLayout>
            <PageMeta
                title={pageTitle}
                description={pageDescription}
                url={Config.pageMeta.blogIndex.url}
            />

            <PostList 
              posts={postSummaries}
              totalPages={totalPages}
              currentPage={currentPage}
            />
        </MainLayout>
    );
}

export async function getStaticProps({ preview = false }) {
  const postSummaries = await ContentfulApi.getPaginatedPostSummaries(1);
  const pageContent = await ContentfulApi.getPageContentBySlug(
    Config.pageMeta.blogIndex.slug,
    {
      preview: preview,
    },
  );

  const totalPages = Math.ceil(
    postSummaries.total / Config.pagination.pageSize,
  );

  return {
    props: {
      preview,
      postSummaries: postSummaries.items,
      totalPages,
      currentPage: "1",
      pageContent: pageContent || null,
    },
  };
}