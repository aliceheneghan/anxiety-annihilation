import React from 'react'

// Components
import Image from '../../components/Image'
import BorderBubble from '../../components/BorderBubble'

export default function ChoiceDog() {
  const url = "https://dog.ceo/api/breeds/image/random/50"
  return (
    <div className="content-cont flx cnt-cnt column">
      <Image url={url}/>
      <BorderBubble />
    </div>
  
  )
}
