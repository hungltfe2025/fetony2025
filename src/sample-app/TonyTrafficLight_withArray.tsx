import React from 'react'

// // hash object
// const config = {

// }
// auto 1 -> auto 2 -> auto 3
const lights = [
  {
    id: 1,
    color: 'red',
    duration: 5000,
    next: 'green'
  },
  {
    id: 2,
    color: 'yellow',
    duration: 2000,
    next: 'red'
  },
  {
    id: 3,
    color: 'green',
    duration: 3000,
    next: 'yellow'
  },
]


function TonyTrafficLight() {
  const [currentColor, setCurrentColor] = React.useState('green');

  React.useEffect(() => {
    const lightItem = lights.find(item => item.color === currentColor);
    if (!lightItem) return;

    const { duration, next } = lightItem;
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
          {lights.map(light => {
            const lightItem = lights.find(item => item.color === currentColor) || {};
            return (
              <div 
                className="traffic-light" 
                style={{ backgroundColor: light.color === lightItem.color ? light.color : undefined }} 
              />
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default TonyTrafficLight