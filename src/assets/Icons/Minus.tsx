import { IconTypeProps } from "Types/IconType";

export const Minus = ({className, color = '#FFA451', size = 16}: IconTypeProps) => {
  return ( 
    <svg
      width={size}
      height={3}
      viewBox="0 0 16 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        stroke={color}
        strokeWidth={2}
        d="M0 1.33331L16 1.33331"
      />
    </svg>
  );
}
