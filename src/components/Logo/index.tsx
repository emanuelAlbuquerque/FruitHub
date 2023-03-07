export interface ILogo {
  src: string
  height?: number
  width?: number
  className?: string
}

export const Logo = ({ src, height, width, className }: ILogo) => {
  return (
    <img
      src={src}
      alt="Logo"
      width={width}
      height={height}
      className={className}
    />
  )
}
