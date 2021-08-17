import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl leading-tight text-gray-900 my-6 text-bolder">
      <Link href="/blog">
        <a className="hover:underline">Blog</a>
      </Link>
      .
    </h2>
  )
}
