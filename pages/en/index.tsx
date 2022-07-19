import React, { useState } from 'react'
import { PresentationScreen } from '../../components/layout/elements/PresentationScreen';
import { FullScreenLoeding } from '../../components/ui/FullScreenLoeding';

const HomePageEN = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false)
  }, 3000);

  return (
    <>
      {
        isLoading
          ?
          <FullScreenLoeding lenguage='En'/>
          :
          <PresentationScreen lenguage='En' />
      }
    </>
  )
}


export default HomePageEN