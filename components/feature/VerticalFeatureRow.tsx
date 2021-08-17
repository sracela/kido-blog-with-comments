import className from 'classnames';
import { useRouter } from 'next/router';
import Link from "next/link";
import { Button } from "../button/Button";
import {imageBuilder} from '../../lib/sanity'

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'my-20',
    'py-8',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full md:w-1/2 text-left sm:px-6">
        <h3 className="text-2xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-lg leading-6">{props.description}</div>
        <div className="pt-2 mt-6 mb-12">
            <Link as={`/posts/${props.slug}`} href="/posts/[slug]">
              <a>
                <Button inverse>Read More →</Button>
              </a>
            </Link>
          </div>
      </div>

      <div className="w-full md:w-1/2 p-6">
        {/* <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} className="object-contain  mx-auto" style={{maxWidth: '350px'}} /> */}
        <img src={imageBuilder(props.image).width(550).height(356).url()} alt={props.imageAlt} className="object-contain mx-auto " style={{maxWidth: '600px'}} />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
