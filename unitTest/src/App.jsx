import { useState } from 'react'
 
import './App.css'
import colorUpdate from './colorUpdate';
 

function App() {
   

  const [color, setColor] = useState("");

   return (
     <>
       <input type="text" value={color} 
       onChange={(e) => setColor(e.target.value)} />
       {colorUpdate(color)}
     </>
   );
}

export default App
