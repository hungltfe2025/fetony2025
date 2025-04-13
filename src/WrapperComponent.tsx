import React from 'react'

interface WrapperComponentProps extends React.PropsWithChildren{
  isAuth?: boolean
}

function WrapperComponent({ children, isAuth }: WrapperComponentProps) {
  console.log('wrapper component')

  if (!isAuth) return null;

  return (
    <div>
      {children}
    </div>
  )
}

export default WrapperComponent