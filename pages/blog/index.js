import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '@layouts/MainLayout'

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
            
            <h1>My Blog</h1>
            <h2>This is the Blog page.</h2>
            <p><Link href="/">Click here to go home</Link></p>
        </MainLayout>
    );
}