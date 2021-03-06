import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "../../components/post/post-body";
import MoreStories from "../../components/post/more-stories";
import Header from "../../components/post/header";
import PostHeader from "../../components/post/post-header";
import Comments from "../../components/post/comments";
import SectionSeparator from "../../components/post/section-separator";
import Layout from "../../components/post/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post/post-title";
import Head from "next/head";
import Form from "../../components/post/form";
import { Section } from "../../components/layout/Section";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Post({ post, morePosts, preview }) {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout buttonA={t('buttonA')} buttonB={t('buttonB')}>
      <Section yPadding="pt-6">
        <Section yPadding="pt-6 px-12">
          <Header />
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <div className="text-gray-900">
              <article>
                <Head>
                  <title>{post.title[i18n.language]}</title>
                  {/* <meta property="og:image" content={post.ogImage.url} /> */}
                </Head>
                <PostHeader
                  title={post.title[i18n.language]}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />
                <PostBody content={post.body} />
              </article>
            </div>
          )}
        </Section>
      </Section>
      {!router.isFallback && (
        <>
          <Section yPadding="pt-6 px-12">
              <Comments comments={post.comments} />
              <Form _id={post._id} />
          </Section>
            <SectionSeparator />
        </>
      )}
      {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false, locale }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  console.log("locale", locale)
  return {
    props: {
      ...(await serverSideTranslations("es", ["common", "footer"])),
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}
