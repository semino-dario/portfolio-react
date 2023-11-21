import { useEffect, useState } from 'react';
import './App.css'
import { Home } from './components/Home';

export default function App() {

  const [opac, setOpac] = useState(true)

  useEffect(() => {

    setTimeout(() => { setLoader(false) }, 2000)

  }, []

  )


  useEffect(() => {

    setTimeout(() => { setOpac(false) }, 1500)

  }, []

  )

  return (
    <div>

      <div style={{ opacity: `${opac ? 0 : 1}`, transition: 'opacity 0.5s' }}>
        <Home />
      </div>

    </div>
  )
}

