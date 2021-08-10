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
            @apply font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-lg py-3 px-20;
            position: relative;   
            z-index: 3; 
            color: white;      
          }

          .btn-xl:before {
            content: "";
            position: absolute;
            left: 5%;
            top: 60%;
            height: 50px;
            width: 90%;
            background: rgba(237,46,126,0.5);
            -webkit-filter: blur(40px);
            filter: blur(30px);
            border-radius: 2px;
            z-index: -1;
            opacity: 0.85;
          }
          .btn-xl:hover:before {
            opacity: 1;
          }

          .btn-primary {
            @apply text-white bg-primary-500;
          }

          .btn-primary:hover {
            @apply bg-primary-600;
          }
          .btn-inverse {
            @apply text-primary-500 border-2 border-primary-500;
            background: white;
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
