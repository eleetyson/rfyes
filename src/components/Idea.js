import React from 'react'

const Idea = props => {
  return (
    <div className="card w-75 box-shadow mb-5">
      <div className="card-body mx-xl-5 mx-lg-5 mx-md-2 mx-sm-1 mx-xs-1 py-xl-3 py-lg-3 my-xl-3 my-lg-3">
        <h2 className="card-title py-2">{props.idea.title}</h2>
        <p className="card-text lead pt-2 pb-4">{props.idea.content}</p>
        <a href={props.idea.link} target="_blank" rel="noopener noreferrer" className="btn btn-info border-0 py-2 px-2" role="button">{props.idea.source}</a><br></br><br></br>
        <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer" className="btn btn-warning border-0 py-2 px-2" role="button">My First Million podcast</a><br></br><br></br>
        <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer" className="btn btn-primary border-0 py-2 px-2" role="button">RFS 100 newsletter</a><br></br><br></br>
      </div>
    </div>
  )

}

export default Idea
