import React from 'react'

// Components
import BeginButton from '../BeginButton'

export default function BorderBubble({ handleNav }) {
  return (
    <div className='shape bubble'>
        <BeginButton handleNav={handleNav} />
    </div>
  )
}
