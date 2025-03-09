import Button from './components/Button';

/* objectA = {
  name: 'xx',
  temperature-weather: 'rain',
  zip code: '11'
} javascript
access properties
 - dot: objectA.xx
 - multi-word: objectA['temperature-weather'], objectA['zip code']

destructuring operator
const { name } = objectA;

default value
const { name = 'default } = objectA;

rename default key
const { name: nameA } = objectA;

rest operator => get all remain properties
const { name, ...rest }  = objectA

spreard operator => dàn trải
*/

function Typography() {
  return 'typography'
}

function User({ component1: Component1, component2, children, isLoading = true, ...restProps }) {
  console.log('component2: ', { Component1, component2, isLoading, restProps })
  return (
    <div>
      User 
      {/* Weather: {props['temperature-weather']} */}
      <br />
      Component 1: <Component1 /> <br />
      Component 2: {component2} <br />
      Content: {children()} 
    </div>
  )
}

function Props() {
  return (
    <div>
      <h1>Props</h1>

      <User 
        title="abc" // string
        numb={123} // number
        isAdult // boolean
        colors={['green', 'red']} // array
        onClick={() => {}} // arrow function
        street={{
          ward: 20,
          district: 1
        }} // function
        temperature-weather="rain"
        component1={Typography} // element type
        component2={<Typography />} // react node
      >
        {() => (
          <>dasdas</>
        )}
      </User>

      <Button 
        buttonText="Submit"
        className="btn-primary"
        onClick={() => console.log("submit")}
        type="button"
      />
    </div>
  )
}

export default Props