import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import {imageBuilder} from '../../lib/sanity'
export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="mx-2 text-gray-900 bg-backgroundColor-white shadow-lg p-6 rounded">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} imageObject={coverImage} url={imageBuilder(coverImage).url()} />
      </div>
      <h3 className="text-xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author?.name} picture={author?.picture} />
    </div>
  )
}