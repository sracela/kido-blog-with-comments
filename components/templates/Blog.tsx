import { Footer } from "./Footer";
import { Meta } from "../layout/Meta";
import HeroPost from "../heropost/hero-post";
import { AppConfig } from "../../utils/AppConfig";
import MoreStories from "../../components/post/more-stories";
import Layout from '../../components/post/layout'

export default function Blog({ allPosts, preview }) {
  if (allPosts) {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);
    return (
      <Layout>
          {heroPost && (
            <HeroPost
              title={heroPost.title[0]}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Layout>
    );
  }

  return <div>No Posts</div>;
}
