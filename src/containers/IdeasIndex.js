// rendering a filterable list of all ideas
import React, { Component } from 'react'
import Idea from '../components/Idea'
import { connect } from 'react-redux'
import { fetchIdeas, fetchFilteredIdeas, resetIdeas } from '../actions/ideas'

class IdeasIndex extends Component {
  constructor() {
    super()
    this.state = { filter: 'all' }
  }

// invoked immediately after component mounts
  componentDidMount() {
    this.clearIdeas()
    this.getIdeas()
  }

// clearing out any existing ideas from redux store
  clearIdeas() { this.props.resetIdeas() }

// using the fetchIdeas action creator to get an idea from the API
  getIdeas() { this.props.fetchIdeas() }

// returns all idea cards upon completion of fetch
  renderContent() {
    return (
      <>
        {this.props.ideas.map(idea => <Idea idea={idea} key={idea.id} id={idea.id} />) }
      </>
    )
  }

// callback function updates local state and fetches ideas based on user selection
  handleChange = event => {
    this.setState({ filter: event.target.value })
    this.props.fetchFilteredIdeas(event.target.value)
  }

  render() {
    return (
      <div className="container col-xl-8 col-lg-10 col-md-10 col-sm-10 col-xs-10  offset-2  py-4 my-xl-4 my-lg-4 my-md-4 my-sm-3 my-xs-3">

        <form className="form-inline justify-content-end w-75 mb-5">
          <label className="pr-2">Filter: </label>
          <select className="form-control" value={this.state.filter} onChange={this.handleChange}>
            <option value='all'>All</option>
            <option value="twitter">Twitter threads</option>
            <option value="rfs">RFS 100 newsletter</option>
            <option value="mfm">My First Million podcast</option>
            <option value="user">User submission</option>
          </select>
        </form>

        {this.renderContent()}
      </div>
    )
  }

}

// enabling Index component to access ideas and loading from state in redux store
const mapStateToProps = ({ ideas, loading }) => {
  return { ideas, loading }
}

export default connect(mapStateToProps, {fetchIdeas, fetchFilteredIdeas, resetIdeas})(IdeasIndex)
