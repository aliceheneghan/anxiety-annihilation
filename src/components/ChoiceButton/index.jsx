import React from 'react'

export default function ChoiceButton({choice, handleNav}) {
  return (
    <div className="choice-btn-cont flx cnt-cnt">
        <button className='title-font xxl' onClick={() => handleNav(`/choice${choice}`)}>{choice}</button>
    </div>
  )
}
