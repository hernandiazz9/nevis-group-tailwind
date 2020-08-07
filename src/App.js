import React,{useState} from 'react';
import Header from '../src/components/Header'
import Home from './components/Home';

function App() {
  const [Scroll, setScroll] = useState(false)
  console.log(Scroll);
  
  return (
    <>
      <div className="md:relative ">
        <Home setScroll={setScroll} />
        <div className=' md:w-screen md:absolute md:top-0'>

          <Header  Scroll={Scroll} />
        </div>
      </div>
      
    </>
  );
}

export default App;
