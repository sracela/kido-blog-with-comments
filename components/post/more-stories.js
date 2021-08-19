import PostPreview from './post-preview'
import { Section } from "../layout/Section";
import { Background } from "../background/Background";

export default function MoreStories({ posts, lang }) {
  return (
    <Background color="bg-backgroundColor-white">
      
    <Section yPadding="pt-6 pb-6 px-12">
      <h2 className="text-2xl md:text-4xl leading-tight mb-8 mt-8 text-gray-900 text-extrabold">
        More Stories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title[lang]}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
        </div>
        </Section>
      </Background>
  )
}
