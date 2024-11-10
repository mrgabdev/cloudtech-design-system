interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
}

export const Label = ({ children, ...props }: Props) => {
  return <label {...props}>{children}</label>
}
