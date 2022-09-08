interface IconProps {
  className?: string;
}

const EyeClose = ({ className }: IconProps) => {
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
        d='M3 10C3.85861 11.0414 4.87009 11.9467 6 12.685M21 10C20.1414 11.0414 19.1299 11.9467 18 12.685M10 14.309L9.5 16.5M10 14.31C11.3212 14.5641 12.6788 14.5641 14 14.31M10 14.31C8.57444 14.0311 7.21621 13.4793 6 12.685M14 14.309L14.5 16.5M14 14.31C15.4256 14.0311 16.7838 13.4793 18 12.685M18 12.685L19.5 14.5M6 12.685L4.5 14.5'
        stroke='black'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default EyeClose;
