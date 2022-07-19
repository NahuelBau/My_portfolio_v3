import { useState } from 'react';
import type { NextPage } from 'next'

import { FullScreenLoeding } from '../components/ui/FullScreenLoeding';
import { PresentationScreen, SmallAboutme } from '../components/layout/elements';


const Home: NextPage = () => {

  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false)
  }, 2000);

  return (
    <>
      {
        isLoading
          ?
          <FullScreenLoeding lenguage='Es' />
          :
          <>
            <PresentationScreen lenguage='Es' />
          </>
      }
    </>
  )
}

export default Home
