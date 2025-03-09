import React from 'react'
import Button from './components/Button';

/* how many way to component re-render
- prop changes
- state changes
- parent render -> children re-render
- key update (force change)
*/

function State() {
  // states
  const [forceUpdate, setForceUpdate] = React.useState(Date.now())
  const [count, setCount] = React.useState(1); // number
  const [message, setMessage] = React.useState({
    text: '',
    author: 'tony',
    address: {
      city: 'hcm',
      ward: 14
    }
  }); // object (tham chiếu) memory A

  // actions
  function updateCount() {
    setCount(count + 1); // 2
    setForceUpdate(Date.now())
  }

  function updateAuthor() {
    //  message.text = 'Tony' + Date.now(); // dont work
    // const newMessage = {
    //   text: 'tony'
    // }
    // setMessage(newMessage)  // memory A

    // updater function
    // callback function
    // syntax code: arrow function
    setMessage((prevState) => {
      return {
        ...prevState,
        address: {
          ...prevState.address,
          ward: Date.now()
        }
      }
    })
  }

  // user click -> () => {} -> deleteItem()
  // re-created function when component re-render
  // function deleteItem(id) {
  //   console.log('deleteItem', id)
  // }

  // user click -> deleteItem();
  const deleteItem = (id) => () => {
    console.log('deleteItem', id)
  }
  
  // UI
  console.log('State render----------: ', count, message)
  return (
    <div>
      <h1>State</h1>
      Count: {count} <br />
      Message: {message.text} <br />
      Author: {message.author} <br />
      Ward: {message.address.ward} <br />
      <Button 
        buttonText="Update count"
        onClick={updateCount}
      />
      <Button 
        buttonText="Update Author Message"
        onClick={updateAuthor}
      />

      <Button 
        buttonText="Update Author Message"
        onClick={updateAuthor}
      />

      <Button 
        key={forceUpdate}
        buttonText="Delete Item"
        // onClick={() => deleteItem(1)}
        onClick={deleteItem(1)}
      />
    </div>
  )
}

export default State