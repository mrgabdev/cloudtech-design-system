interface Props {
  children: React.ReactNode
}

export const StoryBookLight = ({ children }: Props) => {
  return <div className='light-theme'>{children}</div>
}
