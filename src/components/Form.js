import React, { Component } from 'react'
import { connect } from 'react-redux'

class Form extends Component {
  constructor() {
    super()
    this.state = {  }
  }

  render() {
    return (
      <div className="card w-75 box-shadow mt-5">
        <div className="card-body mx-xl-5 mx-lg-5 mx-md-2 mx-sm-1 mx-xs-1 py-xl-3 py-lg-3 my-xl-3 my-lg-3">
          <form className="form-group text-center">
            <label className="text-left">Idea Title *
              <input className="form-control mt-2 mb-4" type="text" name="title" placeholder="Dog bones for babies" autoComplete="off" required/>
            </label>
            <br></br>

            <label className="text-left">Idea Explanation *
              <textarea className="form-control mt-2 mb-4" type="text" name="content" placeholder="My toddler keeps gnawing on my arm..." autoComplete="off" resize="none" required/>
            </label>

            <label className="text-left">Link to your Twitter, personal website, etc. *
              <input className="form-control mt-2 mb-4" type="url" name="link" placeholder="https://mywebsite.com/home" autoComplete="off" required/>
            </label><br></br>

            <button type="submit" className="btn btn-dark">Submit</button>
          </form>
        </div>
      </div>
    )
  }

}

export default Form
// export default connect()(Form)
