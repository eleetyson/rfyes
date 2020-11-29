import React from 'react'

const Idea = props => {

// style the source link button dynamically
  let sourceBtnClass
  if (props.idea.source.includes('Twitter thread')) {
    sourceBtnClass = 'btn-info'
  } else if (props.idea.source.includes('My First Million podcast')) {
    sourceBtnClass = 'btn-warning'
  } else if (props.idea.source.includes('RFS 100 newsletter')) {
    sourceBtnClass = 'btn-primary'
  } else if (props.idea.source.includes('User submission')) {
    sourceBtnClass = 'btn-dark'
  }

  return (
    <div className="card w-75 box-shadow mb-4">
      <div className="card-body mx-xl-5 mx-lg-5 mx-md-2 mx-sm-1 mx-xs-1 py-xl-3 py-lg-3 my-xl-3 my-lg-3">
        <h2 className="card-title py-2">{props.idea.title}</h2>
        <p className="card-text lead pt-2 pb-3">{props.idea.content}</p>
        <a href={props.idea.link} target="_blank" rel="noopener noreferrer" className={`btn ${sourceBtnClass} border-0 py-2 px-2`} role="button">{props.idea.source}</a>
      </div>
    </div>
  )

}

export default Idea
