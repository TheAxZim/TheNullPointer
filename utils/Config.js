const SITE_URL = "https://the-null-pointer.vercel.app";

export const Config = {
  site: {
    owner: "Azeem Ilyas",
    title: "The Null Pointer",
    domain: "the-null-pointer.vercel.app",
    email: "dev@thenullpointer.co.uk",
  },
  pageMeta: {
    openGraph: {
      twitterUser: "TheNullPointer",
    },
    home: {
      url: SITE_URL,
      slug: "/",
    },
    blogIndex: {
      url: `${SITE_URL}/blog`,
      slug: "/blog",
    },
    blogIndexPage: {
      slug: "/blog/page/[page]",
    },
    post: {
      slug: "/blog/[slug]",
    },
  },
  pagination: {
    pageSize: 2,
    recentPostsSize: 3,
  },
};