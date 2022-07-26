import { IconProps } from '../../interfaces/iconInterface';

const Hamburger = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.125 18.375H19.875M4.125 12.375H19.875M4.125 6.375H19.875'
        stroke='#0D0D0D'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Hamburger;
