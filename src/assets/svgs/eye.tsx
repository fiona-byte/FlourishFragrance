import { IconProps } from '../../interfaces/iconInterface';

const Eye = ({ className }: IconProps) => {
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
        d='M3 12C8.4 4 15.6 4 21 12C15.6 20 8.4 20 3 12Z'
        stroke='#0D0D0D'
        stroke-width='2'
        stroke-linejoin='round'
      />
      <path
        d='M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12V12Z'
        stroke='#0D0D0D'
        stroke-width='2'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default Eye;
