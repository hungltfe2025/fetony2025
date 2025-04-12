import React from "react"

function TonyColorBox() {
  const [currentColor, setCurrentColor] = React.useState<string>('');
  const [boxs] = React.useState([
    {
      id: 1,
      title: 'red',
      bgColor: 'red'
    },
    {
      id: 2,
      title: 'yellow',
      bgColor: 'yellow'
    },
    {
      id: 3,
      title: 'aqua',
      bgColor: 'aqua'
    },
    {
      id: 4,
      title: 'purple',
      bgColor: 'purple'
    },
  ])

  function onChangeColor(color: string) {
    if (color === currentColor) {
      setCurrentColor('');
      return; // return early
    }
    setCurrentColor(color)
  }

  return (
    <div>
      <h1>TonyColorBox</h1>
      Current Color: {currentColor || 'Default'} <br />
      <div style={{ display: 'flex'}}>
        {boxs.map(box => {
          const bgColor = currentColor || box.bgColor;
          return (
            <div 
              key={box.id} 
              className="box" 
              style={{ backgroundColor: bgColor }} 
              onClick={() => onChangeColor(box.bgColor)}
            >
              {box.title}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TonyColorBox