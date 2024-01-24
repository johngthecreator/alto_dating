import { useState } from 'react';
import AnimatedPage from './components/AnimatedPage';
import { AnimatePresence } from 'framer-motion';
import HeightQuiz from './pages/HeightQuiz';


function App() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div>
      <AnimatePresence>
        {visible && 
          <AnimatedPage>
              <HeightQuiz />
          </AnimatedPage>
        }
      </AnimatePresence>
      <div className='absolute flex flex-col items-center justify-center bg-gradient-to-b from-blue-300 to-[#DCE5E5] p-5 w-screen h-screen overflow-y-scroll'>
        <h1 className='font-black text-[150px] md:text-[300px] text-[#333]'><span className='text-blue-400'>a</span>lt<span className='text-pink-400'>o</span></h1>
        {/* <span className="bg-clip-text text-transparent bg-[url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2568&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center font-black text-[100px] md:text-[300px]">
        alto
        </span> */}
        <p className='text-lg md:text-xl text-center text-[#707070]'>Find the love of your life soley based off of their height</p>
        <button onClick={()=>setVisible(true)} className='bg-[#333] text-white font-bold px-5 py-3 rounded-xl my-10'>Get Started</button>
      </div>
    </div>
  )
}

export default App

