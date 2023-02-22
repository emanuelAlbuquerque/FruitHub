import { IconTypeProps } from "Types/IconType"

export const PlusIcon = ({ className, color = '#FFA451', size = 12}: IconTypeProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.75 5.25V0h-1.5v5.25H0v1.5h5.25V12h1.5V6.75H12v-1.5H6.75z"
        fill={color}
      />
    </svg>
  )
}