// controlled form component for idea submission on About page
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addIdea } from '../actions/ideas'

class Form extends Component {
  constructor() {
    super()
    this.state = { title: '', content: '', link: '' }
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
    // this.setState({ title: '', content: '', link: '' })
  }

  render() {
    return (
      <div className="card w-75 box-shadow mt-5">
        <div className="card-body mx-xl-5 mx-lg-5 mx-md-2 mx-sm-1 mx-xs-1 py-xl-3 py-lg-3 my-xl-3 my-lg-3">
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
                className="form-control mt-2 mb-4"
                type="text" name="content" value={this.state.content}
                onChange={this.handleChange}
                placeholder="My toddler keeps gnawing on my arm..." autoComplete="off" resize="none" required
              />
            </label>

            <label className="text-left">Link to your Twitter, personal website, etc. *
              <input
                className="form-control mt-2 mb-4"
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
    )
  }

}

export default connect(null, {addIdea})(Form)
