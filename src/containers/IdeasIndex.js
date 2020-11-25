import React, { Component } from 'react'
import Loading from '../components/Loading'
import Idea from '../components/Idea'
import { connect } from 'react-redux'
import { fetchIdeas, resetIdeas } from '../actions/ideas'

class IdeasIndex extends Component {

// invoked immediately after component mounts
  componentDidMount() {
    this.clearIdeas()
    this.getIdeas()
    // window.addEventListener("keyup", this.handleKeyUp)
  }

// clearing out any existing ideas from redux store
  clearIdeas() { this.props.resetIdeas() }

// using the fetchIdeas action creator to get an idea from the API
  getIdeas() { this.props.fetchIdeas() }

// display loading message until fetch is completed
  renderContentConditional() {
    if (this.props.loading) {
      return this.renderContentLoading()
    } else {
      return this.renderContent()
    }
  }

// returns the component for the loading animation
  renderContentLoading() {
    return <Loading />
  }

// invokes renderFilter() and returns all idea cards upon completion of fetch
  renderContent() {
    return (
      <>
        {this.renderFilterSelect()}
        {this.props.ideas.map(idea => <Idea idea={idea} key={idea.id} id={idea.id} />) }
      </>
    )
  }

//
  renderFilterSelect() {
    return (
      <form className="form-inline justify-content-end w-75 mb-5">
        <label className="pr-2">Filter: </label>
        <select className="form-control">
          <option defaultValue>All</option>
          <option value="twitter">Twitter threads</option>
          <option value="rfs">RFS 100 newsletter</option>
          <option value="mfm">My First Million podcast</option>
        </select>
      </form>
    )
  }

  render() {
    return (
      <div className="container col-xl-8 col-lg-10 col-md-10 col-sm-10 col-xs-10  offset-2  py-5 my-xl-5 my-lg-5 my-md-5 my-sm-4 my-xs-4">
        {this.renderContentConditional()}
      </div>
    )
  }

}

// enabling Index component to access ideas and loading from state in redux store
const mapStateToProps = ({ ideas, loading }) => {
  return { ideas, loading }
}

export default connect(mapStateToProps, {fetchIdeas, resetIdeas})(IdeasIndex)


// returns a filter cop
  // renderFilter() {
  //   return (
  //     <form className="form-inline justify-content-end w-75 mb-5">
  //       <label className="pr-2">Filter: </label>
  //       <select className="form-control" onChange={this.handleChange}>
  //         <option defaultValue>All</option>
  //         <option value="twitter">Twitter threads</option>
  //         <option value="rfs">RFS 100 newsletter</option>
  //         <option value="mfm">My First Million podcast</option>
  //       </select>
  //     </form>
  //   )
  // }
