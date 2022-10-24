import { IconProps } from '../../interfaces/iconInterface';

const Plus = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.99998 16.6667V10M9.99998 10V3.33337M9.99998 10H16.6666M9.99998 10H3.33331'
        stroke='black'
        stroke-width='2'
        stroke-linecap='round'
      />
    </svg>
  );
};

export default Plus;
