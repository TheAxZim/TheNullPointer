import Head from "next/head";
import OpenGraph from "@utils/OpenGraph";
import { Config } from "@utils/Config";

export default function PageMeta(props) {
    const { title, description, url, canonical } = props;
    const siteTitle = `${title} | ${Config.site.title}`;

    return (
        <Head>
            <title>{siteTitle}</title>

            {canonical && <link rel="canonical" href={canonical} />}

            <meta name="title" content={siteTitle} />
            <meta property="og:title" content={title} />
            <meta property="twitter:title" content={title} />

            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta property="twitter:description" content={description} />

            <meta property="og:url" content={url} />
            <meta property="twitter:url" content={url} />

            <meta property="og:image" content={OpenGraph.generateImageUrl(title)} />
            <meta
                property="twitter:image"
                content={OpenGraph.generateImageUrl(title)}
            />

            <meta name="twitter:card" content="summary_large_image" />
            <meta
                name="twitter:site"
                content={`@${Config.pageMeta.openGraph.twitterUser}`}
            />
            <meta
                name="twitter:creator"
                content={`@${Config.pageMeta.openGraph.twitterUser}`}
            />

            <link rel="icon" href="/public/favicon.ico" />

            <meta name="msapplication-TileColor" content="#b91d47" />
            <meta name="theme-color" content="#f11012" />
        </Head>
    );
}