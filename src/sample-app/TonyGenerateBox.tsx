import React from 'react'
import { randomColor } from '../utils/randomColor';

// string[], number[]

interface IBox {
  id: number,
  title: string,
}

interface BoxItem {
  box: IBox,
}

function BoxItem({ box }: BoxItem) {
  const [bgColor, setBgColor] = React.useState('antiquewhite');

  console.log('box', box.id)

  function changeBgColor() {
    setBgColor(randomColor())
  }

  return (
    <div 
      key={box.id} 
      className='box'
      style={{ backgroundColor: bgColor}}
      onClick={changeBgColor}
    >
      {box.title}
    </div>
  )
}

const BoxMemo = React.memo(BoxItem);

function TonyGenerateBox() {
  const [number, setNumber] = React.useState(0);
  const [boxs, setBoxs] = React.useState<IBox[]>([]);

  function onChangeNumber(e: React.ChangeEvent<HTMLInputElement>) {
    setNumber(Number(e.target.value))
  }

  function handleGenerateBox() {
    const boxes = [];
    for (let i = 0;  i < number; i++) {
      const newBox = {
        id: Date.now() + i,
        title: "Box #" + i + 1,
      }
      boxes.push(newBox)
    }
    setBoxs(boxes);
  }

  console.log('TonyGenerateBox: ', boxs)

  return (
    <div>
      <h1>TonyGenerateBox</h1>

      Number of box: <input type="number" onChange={onChangeNumber}/>
      <button type="button" onClick={handleGenerateBox}>Generate</button>

      <div className="boxContainer">
        {boxs.map(box => (
          <BoxMemo key={box.id} box={box} />
        ))}
      </div>
    </div>
  )
}

export default TonyGenerateBox