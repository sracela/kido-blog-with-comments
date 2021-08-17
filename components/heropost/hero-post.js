import Avatar from "../post/avatar";
import Date from "../post/date";
import Header from "../post/header";
import CoverImage from "../post/cover-image";
import Link from "next/link";
import { Section } from "../layout/Section";
import { imageBuilder } from "../../lib/sanity";
import { Button } from "../button/Button";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <Section yPadding="pt-6 px-12">
      <Header />
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-0 pb-12 flex justify-center flex-col">
          <img
            src={imageBuilder(coverImage).url()}
            alt="First feature alt text"
            className="object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 text-left sm:px-5 px-12 py-6">
          <div className="text-lg lg:text-2xl flex gap-1">
            <img
              src="https://global-uploads.webflow.com/60b4f2faa8d7c9bccbaf8630/60c9f009094ff20ae529e047_tag.svg"
              loading="lazy"
              alt="Kido Blog Tags"
              className="featured-icon"
            ></img>
            Featured Post
          </div>

          <h1 className="lg:text-5xl text-5xl text-gray-800 font-extrabold leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h1>
          <div className="mt-6 text-gray-800 text-lg">
              Descubre cuántas personas han visitado tu ciudad durante la
              pandemia y si ha recibido más o menos turistas internacionales que
              otros años.
            </div>
          <div className="pt-2 mt-6 mb-12">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a>
                <Button inverse>Read More →</Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

// export default function HeroPost({
//   title,
//   coverImage,
//   date,
//   excerpt,
//   author,
//   slug,
// }) {
//   return (
//     <section>
//       <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 my-8 md:mb-8">
//         <div>
//           <h3 className="mb-1 text-2xl lg:text-4xl leading-tight">
//             <Link as={`/posts/${slug}`} href="/posts/[slug]">
//               <a className="hover:underline">{title}</a>
//             </Link>
//           </h3>
//         </div>
//       </div>
//       <div className="md:mb-16">
//         <CoverImage slug={slug} imageObject={coverImage} title={title} url={coverImage} />
//       </div>
//     </section>
//   )
// }
