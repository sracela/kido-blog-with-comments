import Avatar from './avatar'
import Date from './date'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-8 md:mb-8">
        <div>
          <h3 className="mb-1 text-2xl lg:text-4xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
        </div>
      </div>
      <div className="md:mb-16">
        <CoverImage slug={slug} imageObject={coverImage} title={title} url={coverImage} />
      </div>
    </section>
  )
}
