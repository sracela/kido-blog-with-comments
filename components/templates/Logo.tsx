import { AppConfig } from '../../utils/AppConfig';
import { useRouter } from 'next/router';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const router = useRouter();
  const size = props.xl ? '180' : '128';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
    <img src={`${router.basePath}/assets/images/KIDO_horizontal_black.png`}  alt={"logo kido"} className="text-primary-500 stroke-current mr-1" width={size}
        height={size}/>
    </span>
  );
};

export { Logo };
