interface Props {
  children: React.ReactNode
}

export const StoryBookDark = ({ children }: Props) => {
  return <div className='dark-theme'>{children}</div>
}
