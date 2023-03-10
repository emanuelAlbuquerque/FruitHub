import { IconTypeProps } from 'Types/IconType'

export const IconHeart = ({
  className,
  color = '#FFA451',
  size = 16
}: IconTypeProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.765 2.472l.419.648.42-.648C9.842.564 11.553.201 12.93.73c1.409.54 2.57 2.054 2.57 4.121 0 .7-.374 1.57-1.038 2.541-.655.957-1.543 1.942-2.467 2.858a48.549 48.549 0 01-2.628 2.394c-.273.233-.52.442-.735.623l-.24.2-.211.18a33.025 33.025 0 00-.579-.47l-.665-.54a51.577 51.577 0 01-2.755-2.396c-.97-.916-1.904-1.902-2.592-2.858C.89 6.41.5 5.543.5 4.85c0-2.065 1.236-3.586 2.747-4.13C4.734.183 6.537.574 7.765 2.47z"
        stroke={color}
      />
    </svg>
  )
}
