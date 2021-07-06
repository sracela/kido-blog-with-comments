import { Base } from '../components/templates/Base';

const Index = () => <Base />;

export default Index;

// export default function Index({ allPosts, preview }) {
//   const heroPost = allPosts[0]
//   const morePosts = allPosts.slice(1)
//   return (
//     <>
//       <Layout preview={preview}>
//         <Head>
//           <title>Kido UI | Docs</title>
//         </Head>
//         <Container>
//           <Intro />
//           {heroPost && (
//             <HeroPost
//               title={heroPost.title}
//               coverImage={heroPost.coverImage}
//               date={heroPost.date}
//               author={heroPost.author}
//               slug={heroPost.slug}
//               excerpt={heroPost.excerpt}
//             />
//           )}
//           {morePosts.length > 0 && <MoreStories posts={morePosts} />}
//         </Container>
//       </Layout>
//     </>
//   )
// }

// export async function getStaticProps({ preview = false }) {
//   const allPosts = await getAllPostsForHome(preview)
//   return {
//     props: { allPosts, preview },
//     revalidate: 1
//   }
// }
