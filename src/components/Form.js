// controlled form component for idea submission
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addIdea } from '../actions/ideas'

class Form extends Component {
  constructor() {
    super()
    this.state = { title: '', content: '', person: '', link: '' }
  }

// updating local state with user input
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

//
  handleSubmit = event => {
    event.preventDefault()
    this.props.addIdea(this.state)
    // this.setState({ title: '', content: '', person: '', link: '' })
  }

  render() {
    return (
      <div className="container col-xl-8 col-lg-10 col-md-10 col-sm-10 col-xs-10  offset-2  py-2 my-2">
        <div className="card w-75 card-special border-0 mt-1">
          <div className="card-body mx-xl-5 mx-lg-5 mx-md-2 mx-sm-1 mx-xs-1 py-xl-1 py-lg-2 my-xl-2 my-lg-2">
            <form className="form-group text-center" onSubmit={this.handleSubmit}>
              <label className="text-left">Idea Title *
                <input
                  className="form-control mt-2 mb-4"
                  type="text" name="title" value={this.state.title}
                  onChange={this.handleChange}
                  placeholder="Dog bones for babies" autoComplete="off" required
                />
              </label>
              <br></br>

              <label className="text-left">Idea Explanation *
                <textarea
                  className="form-control mt-2 mb-3"
                  type="text" name="content" value={this.state.content}
                  onChange={this.handleChange}
                  placeholder="My toddler keeps gnawing on my arm..." autoComplete="off" resize="none" required
                />
              </label>

              <label className="text-left">Your Name *
                <input
                  className="form-control mt-2 mb-3"
                  type="text" name="person" value={this.state.person}
                  onChange={this.handleChange}
                  placeholder="Full Name" autoComplete="off" required
                />
              </label>

              <label className="text-left">Link to your Twitter, personal website, etc. *
                <input
                  className="form-control mt-2 mb-3"
                  type="url" name="link" value={this.state.link}
                  onChange={this.handleChange}
                  placeholder="https://mywebsite.com/home" autoComplete="off" required
                />
              </label>
              <br></br>

              <button type="submit" className="btn btn-dark">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

}

export default connect(null, {addIdea})(Form)
