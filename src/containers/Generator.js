import React, { Component } from 'react'
import Idea from '../components/Idea'
import Instruction from '../components/Instruction'

export default class Generator extends Component {
  render() {
    return (
      <div className="container col-xl-8 col-lg-10 col-md-10 col-sm-10 col-xs-10  offset-2  py-5 my-xl-5 my-lg-5 my-md-5 my-sm-4 my-xs-4">
        // <div className="card w-75 box-shadow mb-5">
        //   <div className="card-body mx-xl-5 mx-lg-5 mx-md-2 mx-sm-1 mx-xs-1 py-xl-3 py-lg-3 my-xl-3 my-lg-3">
        //     <h2 className="card-title py-2">The idea goes here</h2>
        //     <p className="card-text lead pt-2 pb-4">It will be explained as such. A few sentences, probably 4 or 5, that will spill over into multiple lines. Another line. Another line. You get the idea. It's kind of like X for Y, but not really at all the same.</p>
        //     <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer" class="btn btn-info border-0 py-2 px-2" role="button">Twitter thread</a><br></br><br></br>
        //     <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer" class="btn btn-warning border-0 py-2 px-2" role="button">My First Million podcast</a><br></br><br></br>
        //     <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer" class="btn btn-primary border-0 py-2 px-2" role="button">RFS 100 newsletter</a><br></br><br></br>
        //   </div>
        // </div>
        <Idea />
        <Instruction />
      </div>
    )
  }

}
