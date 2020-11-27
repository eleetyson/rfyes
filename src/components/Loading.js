// rendering the three dots animation to indicate loading state
import React from 'react'
import LottieAnimation from '../Lottie'
import home from '../animations/loading.json'

const Loading = () => {
  return (
    <div className="card w-75 box-shadow mb-5">
      <LottieAnimation lotti={home} height={300} width={300} />
    </div>
  )

}

export default Loading
