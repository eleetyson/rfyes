import React, { Component } from 'react'

class Filter extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <form className="form-inline justify-content-end w-75 mb-5">
        <label className="pr-2">Filter: </label>
        <select className="form-control">
          <option defaultValue>All</option>
          <option>RFS 100 newsletter</option>
          <option>My First Million podcast</option>
          <option>Twitter threads</option>
        </select>
      </form>
    )
  }

}

export default Filter
