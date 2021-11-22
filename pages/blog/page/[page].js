import ContentfulApi from "@utils/ContentfulApi";
import { Config } from "@utils/Config";
import PageMeta from "@components/PageMeta";
import PostList from "@components/PostList";
import RichTextPageContent from "@components/RichTextPageContent";
import MainLayout from "@layouts/MainLayout";
import Container from "@components/Container";

export default function BlogIndexPage(props) {
  const {
    postSummaries,
    totalPages,
    currentPage,
    pageContent,
    preview,
  } = props;

  const pageTitle = pageContent ? pageContent.title : "Blog";
  const pageDescription = pageContent
    ? pageContent.description
    : "Articles | The Null Pointer";

  return (
    <MainLayout preview={preview}>
      <PageMeta
        title={`${pageTitle} Page ${currentPage}`}
        description={pageDescription}
        url={`${Config.pageMeta.blogIndex.url}/page/${currentPage}`}
      />

      <PostList 
        posts={postSummaries}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const totalPosts = await ContentfulApi.getTotalPostsNumber();
  const totalPages = Math.ceil(totalPosts / Config.pagination.pageSize);

  const paths = [];

  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { page: page.toString() } });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const postSummaries = await ContentfulApi.getPaginatedPostSummaries(
    params.page,
  );
  const totalPages = Math.ceil(
    postSummaries.total / Config.pagination.pageSize,
  );
  const pageContent = await ContentfulApi.getPageContentBySlug(
    Config.pageMeta.blogIndex.slug,
    {
      preview: preview,
    },
  );

  return {
    props: {
      preview,
      postSummaries: postSummaries.items,
      totalPages,
      currentPage: params.page,
      pageContent: pageContent || null,
    },
  };
}