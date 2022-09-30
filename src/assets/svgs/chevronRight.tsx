import { IconProps } from '../../interfaces/iconInterface';

const ChevronRight = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width='2.4rem'
      height='2.4rem'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M9 20L17 12L9 4' stroke='#F4F4F4' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
};

export default ChevronRight;
