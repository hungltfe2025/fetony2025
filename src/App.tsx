import JSX from './JSX';
import Props from './Props';
import State from './State';
import ConditionalRendering from './ConditionalRendering';
import ListKey from './ListKey';
import LiftingStateUp from './LiftingStateUp';
import From from './From';
import TonyGenerateBox from './sample-app/TonyGenerateBox';
import StateHook from './StateHook';
import EffectHook from './EffectHook';
import React from 'react';


function App() {
  const [isMounted, setIsMounted] = React.useState(true);
  return (
    <>
      <JSX />
      
      <br />
      <Props />

      <br />
      <State />

      <br />
      <ConditionalRendering />

      <br />
      <ListKey />

      <br />
      <LiftingStateUp />

      <br />
      <From />

      <TonyGenerateBox />

      <br />
      <StateHook />
      
      <br />
      <button onClick={() => setIsMounted(false)}>Test Unmounted</button>
      {isMounted && (
        <EffectHook />
      )}


      <br />
      <br />
      <br />

      <br />
      <br /> <br />
      <br />
    </>
  )
}

export default App
