import Base from '../components/templates/Base';
import { getAllPostsForHome } from "../lib/api";

const Index = ({ allPosts, preview }) => <Base allPosts={allPosts} preview={preview}/>;

export default Index;

export async function getStaticProps({ preview = false }) {
    const allPosts = await getAllPostsForHome(preview);
    return {
      props: { allPosts, preview },
      revalidate: 10,
    };
  }

