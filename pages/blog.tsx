import BlogCmp from '../components/templates/Blog';
import { getAllPostsForHome } from "../lib/api";

const Blog = ({ allPosts, preview }) => <BlogCmp allPosts={allPosts} preview={preview}/>;

export default Blog;


export async function getStaticProps({ preview = false }) {
    console.log("hola")
    const allPosts = await getAllPostsForHome(preview);
    return {
      props: { allPosts, preview },
      revalidate: 10,
    };
  }
  