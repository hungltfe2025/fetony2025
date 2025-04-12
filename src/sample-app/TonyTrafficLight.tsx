import React from 'react'

// // hash object
// const config = {

// }
// hash object lights['green'].
interface ILightItem {
  id: number,
  color: string,
  duration: number,
  next: string
}

interface ILight {
  [key: string]:ILightItem
}

const light:ILight = {
  red: {
    id: 1,
    color: 'red',
    duration: 5000,
    next: 'green'
  },
  yellow: {
    id: 2,
    color: 'yellow',
    duration: 2000,
    next: 'red'
  },
  green: {
    id: 3,
    color: 'green',
    duration: 3000,
    next: 'yellow'
  },
}

function TonyTrafficLight() {
  const [currentColor, setCurrentColor] = React.useState('green');

  React.useEffect(() => {
    const { duration, next } = light[currentColor];
    const timer = setTimeout(() => {
      setCurrentColor(next);
    }, duration)

    return () => {
      clearTimeout(timer)
    }
  }, [currentColor])


  return (
    <div>
      <h1>TonyTrafficLight</h1>

      <div className="traffic_container">
        <div className="traffic-light-container traffic-light-container--vertical">
          {Object.keys(light).map(key => {
            const lightItem = light[key];
            return (
              <div 
                key={lightItem.id}
                className="traffic-light" 
                style={{ backgroundColor: lightItem.color === currentColor ? lightItem.color : undefined }} 
              />
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default TonyTrafficLight