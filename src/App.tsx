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
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-black text-[150px] md:text-[300px] leading-none text-[#333]'><span className='text-blue-400'>a</span>lt<span className='text-pink-400'>o</span></h1>
          <p className='text-lg md:text-xl text-center text-[#707070]'>Love at first sight? Make sure their height is just right &#10084;</p>
          <div className='flex gap-5'>
            <a href='https://gist.github.com/johngthecreator/02232d5bcf35e85d656ff41daf841c2f' target="_blank" className='bg-[#333] text-white font-bold px-5 py-3 rounded-xl my-10'>My Research</a>
            <button onClick={()=>setVisible(true)} className='bg-[#333] text-white font-bold px-5 py-3 rounded-xl my-10'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

