import React from 'react'

const Instruction = props => {
  return (
    <div className="card w-75 bg-transparent border-0">
      <div className="card-body">
        <h5 className="text-right" style={{color: props.active ? 'rgba(0, 0, 0, 1)' : '' }} ><kbd>Enter</kbd> for new idea</h5>
      </div>
    </div>
  )

}

export default Instruction
