import React from 'react'
import Button from './components/Button'

function From() {
  const firstNameRef = React.useRef<HTMLInputElement>(null);
  const [lastName, setLastName] = React.useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log('submit: ', {
      firstName: (document.getElementById('firstName') as HTMLInputElement).value,
      firstNameRef: firstNameRef.current?.value,
      lastName
    })
  }

  console.log('Form')

  return (
    <div>
      <h1>From</h1>

      <form onSubmit={handleSubmit}>
        First Name: <input type="text" id="firstName" ref={firstNameRef}  /> <br />
        Last Name: <input type="text" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)}  />  <br />
        <Button 
          variant='black'
          buttonText='Submit'
          type="submit"
        />
      </form>
    </div>
  )
}

export default From