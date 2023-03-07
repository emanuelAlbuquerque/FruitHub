import { IconTypeProps } from 'Types/IconType'

export const UserIcon = ({ className, color = '#FFF' }: IconTypeProps) => {
  return (
    <svg
      width={20}
      height={22}
      viewBox="0 0 20 22"
      fill="none"
      className={className}
    >
      <path
        d="M18.59 21c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7M10 11a5 5 0 100-10 5 5 0 000 10z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
