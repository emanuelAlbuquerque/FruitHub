import { IconTypeProps } from "Types/IconType"

export const FilterIcon = ({className, color = '#070648', size = 19}: IconTypeProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <path
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        d="M8 4L18 4"
      />
      <circle cx={4} cy={4} r={3.5} stroke={color} />
      <path
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        d="M11 13L1 13"
      />
      <circle
        cx={15}
        cy={13}
        r={3.5}
        transform="rotate(-180 15 13)"
        stroke={color}
      />
    </svg>
  )
}