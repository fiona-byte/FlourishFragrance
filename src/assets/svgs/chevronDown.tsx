import { IconProps } from '../../interfaces/iconInterface';

const ChevronDown = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width='2.4rem'
      height='2.4rem'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.33301 12L15.9997 22.6667L26.6663 12'
        stroke='#0D0D0D'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default ChevronDown;
