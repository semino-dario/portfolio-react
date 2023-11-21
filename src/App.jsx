import { useEffect, useState } from 'react';
import './App.css'
import { Home } from './components/Home';
import { CircularProgress } from '@mui/material';

export default function App() {

  // const [loader, setLoader] = useState(true)
  const [opac, setOpac] = useState(true)

  useEffect(() => {

    // setTimeout(() => { setLoader(false) }, 2000)
    setTimeout(() => { setOpac(false) }, 2000)

  }, []


  )

  return (
    <div>
      {/* {loader ?
        <div className='flex  flex-col justify-center items-center h-[100vh]'>
          <CircularProgress />
        </div>
        : */}
      <div style={{ opacity: `${opac ? 0 : 1}`, transition: 'opacity 0.5s' }}>
        <Home />
      </div>
      {/* } */}
    </div>
  )
}

