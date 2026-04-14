interface CardProps {
  children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
  return (
    <div className='card-wrapper'>
      {children}
    </div>
  )
}

export default Card
