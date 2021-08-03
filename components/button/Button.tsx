import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
  inverse?: boolean;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': !props.inverse,
    'btn-inverse': props.inverse,
  });

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-lg py-3 px-5;
          }

          .btn-primary {
            @apply text-white bg-primary-500;
          }

          .btn-primary:hover {
            @apply bg-primary-600;
          }
          .btn-inverse {
            @apply bg-gray-100 text-primary-500 border-2 border-primary-500;
          }

          .btn-inverse:hover {
            @apply bg-gray-200;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
