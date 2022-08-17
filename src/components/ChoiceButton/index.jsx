import React from 'react'

export default function ChoiceButton({choice}) {
  return (
    <div className="choice-btn-cont flx cnt-cnt">
        <button className='title-font xxl'>{choice}</button>
    </div>
  )
}
