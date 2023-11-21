import { useEffect, useState } from 'react';
import './App.css'
import { Home } from './components/Home';
import { CircularProgress } from '@mui/material';

export default function App() {

  const [loader, setLoader] = useState(true)

  useEffect(() => {

    setTimeout(() => { setLoader(false) }, 2000)
  }, []


  )

  return (
    <div>
      {loader ?
        <div className='flex  flex-col justify-center items-center h-[100vh]'>
          <CircularProgress />
        </div>
        :
        <Home />}
    </div>
  )
}

