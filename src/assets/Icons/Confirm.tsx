import { IconTypeProps } from 'Types/IconType'

export const Confirm = ({ className, color = '#fff' }: IconTypeProps) => {
  return (
    <svg
      width={10}
      height={8}
      viewBox="0 0 10 8"
      fill="none"
      className={className}
    >
      <path
        d="M9.33.785L8.754.322C8.47.094 8.306.096 8.063.396L3.88 5.56 1.933 3.94c-.268-.225-.437-.213-.657.063l-.445.578c-.225.284-.196.445.07.667l2.775 2.295c.285.24.446.215.667-.053l5.059-6.015c.237-.285.223-.456-.072-.691z"
        fill={color}
      />
    </svg>
  )
}
