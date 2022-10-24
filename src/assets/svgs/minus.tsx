import { IconProps } from '../../interfaces/iconInterface';

const Minus = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M16.6666 10H3.33331' stroke='#0D0D0D' stroke-width='2' stroke-linecap='round' />
    </svg>
  );
};

export default Minus;
