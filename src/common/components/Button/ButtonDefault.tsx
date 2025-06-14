import { Button as Buttons } from "@material-tailwind/react";
interface Props {
  type: any
  children?: any
  className?: string
  disabled?: boolean
  variant?: any
  onClick?: () => void
  color?: any
  name?: any
  size?: any
}

export const ButtonDefault = ({ children, ...props }: Props) => {
  return <Buttons {...props}>{children}</Buttons>
}
