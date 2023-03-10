import { IconTypeProps } from 'Types/IconType'

export const ArrowLarge = ({
  className,
  color = '#333',
  size
}: IconTypeProps) => {
  return (
    <svg
      width={8}
      height={18}
      viewBox="0 0 10 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.34 20a1.43 1.43 0 01-1.114-.529l-6.901-8.57a1.428 1.428 0 010-1.814L7.469.516a1.43 1.43 0 012.2 1.828l-6.386 7.657 6.172 7.656A1.428 1.428 0 018.341 20z"
        fill={color}
        fillOpacity={0.8}
      />
    </svg>
  )
}
