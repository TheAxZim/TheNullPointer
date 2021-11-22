import ContentfulApi from "@utils/ContentfulApi";
import { Config } from "@utils/Config";
import PageMeta from "@components/PageMeta";
import MainLayout from "@layouts/MainLayout";
import Container from "@components/Container";
import Post from "@components/Post";
import BlogHeader from "@components/BlogHeader";

export default function PostWrapper(props) {
  const { post, preview } = props;

  return (
    <MainLayout>
      <PageMeta 
        title={post.title}
        description={post.excerpt}
        url={`${Config.pageMeta.blogIndex.url}/${post.slug}`}
        canonical={ post.externalUrl ? post.externalUrl : false }
      />

      <BlogHeader 
        title={post.title}
        date={post.date}
        tags={post.tags}
      />

      <Container>
        <Post post={post} />
      </Container>

    </MainLayout>
  );
}

export async function getStaticPaths() {
  const blogPostSlugs = await ContentfulApi.getAllPostSlugs();

  const paths = blogPostSlugs.map((slug) => {
    return { params: { slug } };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params, preview = false }) {
  const post = await ContentfulApi.getPostBySlug(params.slug, {
    preview: preview,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      preview,
      post,
    },
  };
}