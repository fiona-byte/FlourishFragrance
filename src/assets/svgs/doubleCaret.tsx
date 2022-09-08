interface IconProps {
  className?: string;
}

const DoubleCaret = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width='2.4rem'
      height='2.4rem'
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.3344 15.4594L6.58437 24.2094C6.52405 24.2697 6.45243 24.3176 6.37361 24.3502C6.29479 24.3828 6.21031 24.3997 6.125 24.3997C6.03968 24.3997 5.9552 24.3828 5.87638 24.3502C5.79756 24.3176 5.72595 24.2697 5.66562 24.2094C5.6053 24.149 5.55744 24.0774 5.52479 23.9986C5.49215 23.9198 5.47534 23.8353 5.47534 23.75C5.47534 23.6647 5.49215 23.5802 5.52479 23.5014C5.55744 23.4226 5.6053 23.3509 5.66562 23.2906L13.9453 15L5.66562 6.70937C5.54379 6.58754 5.47534 6.4223 5.47534 6.25C5.47534 6.0777 5.54379 5.91245 5.66562 5.79062C5.78745 5.66879 5.9527 5.60034 6.125 5.60034C6.2973 5.60034 6.46254 5.66879 6.58437 5.79062L15.3344 14.5406C15.3966 14.5999 15.4461 14.6711 15.48 14.7501C15.5138 14.8291 15.5312 14.9141 15.5312 15C15.5312 15.0859 15.5138 15.1709 15.48 15.2499C15.4461 15.3289 15.3966 15.4001 15.3344 15.4594ZM24.0844 14.5406L15.3344 5.79062C15.2125 5.66879 15.0473 5.60034 14.875 5.60034C14.7027 5.60034 14.5375 5.66879 14.4156 5.79062C14.2938 5.91245 14.2253 6.0777 14.2253 6.25C14.2253 6.4223 14.2938 6.58754 14.4156 6.70937L22.6953 15L14.4156 23.2906C14.3553 23.3509 14.3074 23.4226 14.2748 23.5014C14.2421 23.5802 14.2253 23.6647 14.2253 23.75C14.2253 23.8353 14.2421 23.9198 14.2748 23.9986C14.3074 24.0774 14.3553 24.149 14.4156 24.2094C14.4759 24.2697 14.5476 24.3176 14.6264 24.3502C14.7052 24.3828 14.7897 24.3997 14.875 24.3997C14.9603 24.3997 15.0448 24.3828 15.1236 24.3502C15.2024 24.3176 15.274 24.2697 15.3344 24.2094L24.0844 15.4594C24.1466 15.4001 24.1961 15.3289 24.23 15.2499C24.2638 15.1709 24.2812 15.0859 24.2812 15C24.2812 14.9141 24.2638 14.8291 24.23 14.7501C24.1961 14.6711 24.1466 14.5999 24.0844 14.5406Z'
        fill='#0D0D0D'
      />
    </svg>
  );
};

export default DoubleCaret;