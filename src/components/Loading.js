import React from 'react'
import LottieAnimation from '../Lottie'
import home from '../animations/loading.json'

const Loading = () => {
  return (
    <div className="card w-75 box-shadow mb-5">
      <div className="card-body mx-xl-5 mx-lg-5 mx-md-2 mx-sm-1 mx-xs-1 py-xl-3 py-lg-3 my-xl-3 my-lg-3">
        <LottieAnimation lotti={home} height={300} width={300} />
      </div>
    </div>
  )

}

export default Loading
