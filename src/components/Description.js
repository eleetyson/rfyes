// brief description of the app
import React from 'react'

const Description = () => {
  return (
    <div className="card w-75 box-shadow-colorful my-3">
      <div className="card-body mx-xl-5 mx-lg-5 mx-md-2 mx-sm-1 mx-xs-1 py-xl-3 py-lg-3 my-xl-3 my-lg-3">
        <h2 className="py-2">What is this?</h2>
        <p class="lead pb-3">RF Yes (Request For Yes) is a collection of startup and side project suggestions. Kind of like Product Hunt but for stuff nobody's built yet.</p>

        <h2 className="py-2">Where are the ideas from?</h2>
        <p class="lead pb-3">These are locally sourced, non-GMO ideas from the <a href="https://thehustle.co/my-first-million-podcast/" target="_blank" rel="noopener noreferrer">My First Million podcast</a>, <a href="https://rfs100.com/" target="_blank" rel="noopener noreferrer">RFS 100 newsletter</a>, and disparate Twitter threads. None of them are mine!</p>

        <h2 className="py-2">How can I submit an idea?</h2>
        <p class="lead">Feel free to <a href="mailto:eleetyson@gmail.com?subject=👋&body=Hey Ethan - here's my idea...">email me</a>, especially if you loved or hated this.</p>
      </div>
    </div>
  )

}

export default Description
