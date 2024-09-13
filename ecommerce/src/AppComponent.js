import React from 'react'
import { Mycomponent1 } from './components/Mycomponent1';
import { Mycomponent2 } from './components/Mycomponent2';
import Myclasscomponent1 from './components/Myclasscomponent1';
import MyClassComponent2 from './components/Myclasscomponent2';
export const App = () => {
  return (
    <div>
      <Mycomponent1 />
      <Mycomponent2 />
      <Myclasscomponent1 />
      <MyClassComponent2 />
    </div>
  )
}
export default App;
