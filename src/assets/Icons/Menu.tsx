import { IconTypeProps } from "Types/IconType"


export const Menu = ({color = '#070648', size = 22, className}: IconTypeProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 1.875A1.375 1.375 0 011.375.5h19.25a1.375 1.375 0 010 2.75H1.375A1.375 1.375 0 010 1.875zM1.375 8.75a1.375 1.375 0 000 2.75h11a1.375 1.375 0 000-2.75h-11z"
        fill={color}
      />
    </svg>
  )
}