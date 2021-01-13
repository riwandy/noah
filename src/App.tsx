import React, { useRef, ChangeEvent } from 'react';
import "./App.css"

import { DynamicText } from "./components/DynamicText/DynamicText"

const App = () => {
  const ref = useRef(null as any);

  const changeHandler = (e: ChangeEvent) => {
    ref.current.updateState((e.target as HTMLInputElement).value)
  }

  return (
    <div className="App">
      <input type="text" name="textInput" id="text-input" onChange={changeHandler} />
      <DynamicText ref={ref} />
    </div>
  );
}

export default App;
